import { useState, useId } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2, CheckCircle } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

type Motivo =
  | ''
  | 'jugar'
  | 'voluntariado'
  | 'arbitro'
  | 'clasificacion'
  | 'general';

interface FormValues {
  nombre: string;
  email: string;
  telefono?: string;
  region: string;
  motivo: Motivo;
  // Voluntariado
  areaApoyo?: string;
  disponibilidad?: string;
  // Jugar
  actividadRegion?: string;
  comoNosEncontraste?: string;
  // Árbitro / Clasificación
  experiencia?: string;
  // Shared
  mensaje: string;
  consentimiento: boolean;
  preferenciaContacto?: 'whatsapp' | 'email';
}

// ─── Constants ────────────────────────────────────────────────────────────────

const MOTIVO_OPTIONS = [
  { value: 'jugar', label: 'Quiero jugar' },
  { value: 'voluntariado', label: 'Voluntariado' },
  { value: 'arbitro', label: 'Árbitro / Oficial' },
  { value: 'clasificacion', label: 'Clasificación (formación / rol clasificador)' },
  { value: 'general', label: 'Otro / General' },
];

const AREA_APOYO_OPTIONS = ['Eventos', 'Logística', 'Comunicaciones / Redes', 'Apoyo técnico / deportivo', 'Otro'];
const DISPONIBILIDAD_OPTIONS = ['Semanal', 'Mensual', 'Puntual'];
const COMO_NOS_ENCONTRASTE_OPTIONS = ['Redes sociales', 'Recomendación', 'Buscador', 'Evento', 'Otro'];
const EXPERIENCIA_OPTIONS = ['Ninguna', 'Básica', 'Intermedia', 'Avanzada'];

const PLACEHOLDER_MENSAJE: Record<string, string> = {
  jugar: 'Cuéntanos tu ciudad, disponibilidad horaria y si conoces el deporte…',
  voluntariado: 'Cuéntanos en qué área te gustaría colaborar y cuánta disponibilidad tienes…',
  arbitro: 'Cuéntanos tu experiencia arbitral o de oficial en el deporte…',
  clasificacion: 'Cuéntanos tu formación en ciencias de la salud o experiencia en clasificación…',
  general: 'Escribe tu consulta, propuesta o mensaje aquí…',
  '': 'Escribe tu mensaje aquí…',
};

// ─── Field wrappers ───────────────────────────────────────────────────────────

interface FieldGroupProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FieldGroup({ label, htmlFor, error, required, children }: FieldGroupProps) {
  return (
    <div className="contact-field-group">
      <label
        htmlFor={htmlFor}
        className={`block text-sm font-medium mb-1 transition-colors ${error ? 'text-[var(--error)]' : 'text-foreground'}`}
      >
        {label}
        {required && (
          <span className="text-primary ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            id={`${htmlFor}-error`}
            role="alert"
            className="technical-label text-[var(--error)] mt-1.5 flex items-center gap-1.5"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.12 }}
          >
            ✕ {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Shared input class builder ───────────────────────────────────────────────

function inputCls(hasError: boolean) {
  return [
    'w-full bg-transparent px-0 py-3',
    'border-b-[3px] border-border',
    'text-foreground placeholder:text-[var(--on-surface-muted)]',
    'focus:outline-none focus:border-[var(--accent)]',
    'transition-colors duration-[var(--motion-fast)]',
    hasError ? 'border-[var(--error)]' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

function selectCls(hasError: boolean) {
  return [
    'w-full bg-surface px-3 py-3',
    'border-[3px] border-border',
    'text-foreground',
    'focus:outline-none focus:border-[var(--accent)]',
    'transition-colors duration-[var(--motion-fast)] min-h-[44px]',
    hasError ? 'border-[var(--error)]' : '',
  ]
    .filter(Boolean)
    .join(' ');
}

// ─── Conditional Field Wrapper ────────────────────────────────────────────────

function ConditionalFields({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="conditional"
          className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Success State ────────────────────────────────────────────────────────────

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      className="flex flex-col items-center justify-center py-20 px-6 text-center"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Icon */}
      <div className="w-20 h-20 border-[3px] border-[var(--success)] flex items-center justify-center mb-8 shadow-[var(--shadow-hard)]">
        <CheckCircle className="w-10 h-10 text-[var(--success)]" aria-hidden="true" />
      </div>
      {/* Technical label */}
      <span className="technical-label text-[var(--success)] mb-4 block">
        STATUS: 200_OK // MENSAJE_ENVIADO
      </span>
      {/* Headline */}
      <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl mb-4">
        Mensaje{' '}
        <span className="text-[var(--success)] italic">recibido</span>
      </h2>
      {/* Body */}
      <p className="text-[var(--on-surface-muted)] max-w-md leading-relaxed mb-10">
        Gracias por escribirnos. Revisaremos tu mensaje y te responderemos a la brevedad por el
        canal de tu preferencia.
      </p>
      {/* CTA */}
      <button
        type="button"
        onClick={onReset}
        className="technical-label px-6 py-3 border-[3px] border-border shadow-[var(--shadow-hard-sm)] hover:shadow-[var(--shadow-hard)] hover:-translate-x-1 hover:-translate-y-1 transition-all bg-surface text-foreground focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        [ENVIAR OTRO]
      </button>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const formId = useId();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: { motivo: '' },
  });

  const motivo = watch('motivo') as Motivo;

  const onSubmit: SubmitHandler<FormValues> = async (_data) => {
    setStatus('loading');
    // Simulación de envío (sin endpoint real aún)
    await new Promise((res) => setTimeout(res, 2000));
    setStatus('success');
  };

  function handleReset() {
    reset();
    setStatus('idle');
  }

  const isLoading = status === 'loading';

  return (
    <section
      id="formulario-contacto"
      className="py-20 md:py-32 bg-background border-b-[3px] border-border"
      aria-label="Sección de formulario de contacto"
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <span className="technical-label text-[var(--brand-metal)] block mb-4">
            SEC.01 // FORMULARIO
          </span>
          <h2 className="font-display font-black uppercase tracking-tight text-4xl md:text-5xl mb-4">
            Contáctanos{' '}
            <span className="text-primary italic">aquí</span>
          </h2>
          <p className="text-[var(--on-surface-muted)] max-w-2xl leading-relaxed">
            Cuéntanos qué necesitas. Nuestro equipo revisará tu mensaje y te responderá. Los campos
            marcados con{' '}
            <span className="text-primary font-bold" aria-label="asterisco, campo requerido">
              *
            </span>{' '}
            son obligatorios.
          </p>
        </div>

        {/* Form container — switches to success state */}
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <SuccessState key="success" onReset={handleReset} />
            ) : (
              <motion.form
                key="form"
                id={`${formId}-form`}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                aria-label="Formulario de contacto de Quad Rugby Chile"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
              >
                {/* ── 1. Nombre ── */}
                <FieldGroup
                  label="Nombre completo"
                  htmlFor={`${formId}-nombre`}
                  error={errors.nombre?.message}
                  required
                >
                  <input
                    id={`${formId}-nombre`}
                    type="text"
                    autoComplete="name"
                    placeholder="Ej: María González"
                    className={inputCls(!!errors.nombre)}
                    aria-describedby={errors.nombre ? `${formId}-nombre-error` : undefined}
                    aria-invalid={!!errors.nombre}
                    {...register('nombre', {
                      required: 'El nombre es requerido.',
                      minLength: { value: 3, message: 'Mínimo 3 caracteres.' },
                      maxLength: { value: 80, message: 'Máximo 80 caracteres.' },
                    })}
                  />
                </FieldGroup>

                {/* ── 2. Email ── */}
                <FieldGroup
                  label="Correo electrónico"
                  htmlFor={`${formId}-email`}
                  error={errors.email?.message}
                  required
                >
                  <input
                    id={`${formId}-email`}
                    type="email"
                    autoComplete="email"
                    placeholder="tu@email.com"
                    className={inputCls(!!errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    aria-invalid={!!errors.email}
                    {...register('email', {
                      required: 'El correo es requerido.',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Ingresa un correo válido.',
                      },
                    })}
                  />
                </FieldGroup>

                {/* ── 3. Teléfono (opcional) ── */}
                <FieldGroup
                  label="WhatsApp / Teléfono"
                  htmlFor={`${formId}-telefono`}
                  error={errors.telefono?.message}
                >
                  <input
                    id={`${formId}-telefono`}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+56 9 1234 5678"
                    className={inputCls(!!errors.telefono)}
                    aria-describedby={errors.telefono ? `${formId}-telefono-error` : undefined}
                    aria-invalid={!!errors.telefono}
                    {...register('telefono', {
                      pattern: {
                        value: /^[+\d\s\-()]{7,20}$/,
                        message: 'Ingresa un número válido (7–20 dígitos).',
                      },
                    })}
                  />
                </FieldGroup>

                {/* ── 4. Región / Ciudad ── */}
                <FieldGroup
                  label="Región o Ciudad"
                  htmlFor={`${formId}-region`}
                  error={errors.region?.message}
                  required
                >
                  <input
                    id={`${formId}-region`}
                    type="text"
                    placeholder="Ej: Región Metropolitana, Concepción…"
                    className={inputCls(!!errors.region)}
                    aria-describedby={errors.region ? `${formId}-region-error` : undefined}
                    aria-invalid={!!errors.region}
                    {...register('region', {
                      required: 'Indica tu región o ciudad.',
                      minLength: { value: 2, message: 'Mínimo 2 caracteres.' },
                      maxLength: { value: 60, message: 'Máximo 60 caracteres.' },
                    })}
                  />
                </FieldGroup>

                {/* ── 5. Motivo ── */}
                <div className="col-span-full">
                  <FieldGroup
                    label="Motivo de contacto"
                    htmlFor={`${formId}-motivo`}
                    error={errors.motivo?.message}
                    required
                  >
                    <select
                      id={`${formId}-motivo`}
                      className={selectCls(!!errors.motivo)}
                      aria-describedby={errors.motivo ? `${formId}-motivo-error` : undefined}
                      aria-invalid={!!errors.motivo}
                      {...register('motivo', {
                        required: 'Selecciona un motivo.',
                        validate: (v) => v !== '' || 'Selecciona un motivo.',
                      })}
                    >
                      <option value="" disabled>
                        — Selecciona un motivo —
                      </option>
                      {MOTIVO_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>
                </div>

                {/* ── 6. Campos condicionales: Voluntariado ── */}
                <ConditionalFields show={motivo === 'voluntariado'}>
                  <FieldGroup
                    label="Área de apoyo"
                    htmlFor={`${formId}-areaApoyo`}
                    error={errors.areaApoyo?.message}
                  >
                    <select
                      id={`${formId}-areaApoyo`}
                      className={selectCls(!!errors.areaApoyo)}
                      {...register('areaApoyo')}
                    >
                      <option value="">— Elige un área —</option>
                      {AREA_APOYO_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>

                  <FieldGroup
                    label="Disponibilidad"
                    htmlFor={`${formId}-disponibilidad`}
                    error={errors.disponibilidad?.message}
                  >
                    <select
                      id={`${formId}-disponibilidad`}
                      className={selectCls(!!errors.disponibilidad)}
                      {...register('disponibilidad')}
                    >
                      <option value="">— Elige disponibilidad —</option>
                      {DISPONIBILIDAD_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>
                </ConditionalFields>

                {/* ── 7. Campos condicionales: Quiero jugar ── */}
                <ConditionalFields show={motivo === 'jugar'}>
                  <FieldGroup
                    label="¿Hay actividad en tu región?"
                    htmlFor={`${formId}-actividadRegion`}
                    error={errors.actividadRegion?.message}
                  >
                    <div
                      className="flex gap-6 pt-2"
                      role="radiogroup"
                      aria-labelledby={`${formId}-actividadRegion-label`}
                    >
                      {['Sí', 'No / No sé'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 cursor-pointer text-sm font-medium"
                        >
                          <input
                            type="radio"
                            value={opt}
                            className="w-4 h-4 accent-primary"
                            {...register('actividadRegion')}
                          />
                          {opt}
                        </label>
                      ))}
                    </div>
                  </FieldGroup>

                  <FieldGroup
                    label="¿Cómo nos encontraste?"
                    htmlFor={`${formId}-comoNosEncontraste`}
                    error={errors.comoNosEncontraste?.message}
                  >
                    <select
                      id={`${formId}-comoNosEncontraste`}
                      className={selectCls(!!errors.comoNosEncontraste)}
                      {...register('comoNosEncontraste')}
                    >
                      <option value="">— Opcional —</option>
                      {COMO_NOS_ENCONTRASTE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>
                </ConditionalFields>

                {/* ── 8. Campos condicionales: Árbitro / Clasificación ── */}
                <ConditionalFields show={motivo === 'arbitro' || motivo === 'clasificacion'}>
                  <FieldGroup
                    label="Experiencia / Formación previa"
                    htmlFor={`${formId}-experiencia`}
                    error={errors.experiencia?.message}
                  >
                    <select
                      id={`${formId}-experiencia`}
                      className={selectCls(!!errors.experiencia)}
                      {...register('experiencia')}
                    >
                      <option value="">— Selecciona nivel —</option>
                      {EXPERIENCIA_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </FieldGroup>
                </ConditionalFields>

                {/* ── 9. Mensaje ── */}
                <div className="col-span-full">
                  <FieldGroup
                    label="Mensaje"
                    htmlFor={`${formId}-mensaje`}
                    error={errors.mensaje?.message}
                    required
                  >
                    <textarea
                      id={`${formId}-mensaje`}
                      rows={5}
                      placeholder={PLACEHOLDER_MENSAJE[motivo] ?? PLACEHOLDER_MENSAJE['']}
                      className={`${inputCls(!!errors.mensaje)} resize-y min-h-[120px]`}
                      aria-describedby={errors.mensaje ? `${formId}-mensaje-error` : undefined}
                      aria-invalid={!!errors.mensaje}
                      {...register('mensaje', {
                        required: 'El mensaje es requerido.',
                        minLength: { value: 20, message: 'Mínimo 20 caracteres.' },
                        maxLength: { value: 2000, message: 'Máximo 2000 caracteres.' },
                      })}
                    />
                  </FieldGroup>
                </div>

                {/* ── 10. Preferencia de contacto (opcional) ── */}
                <div className="col-span-full">
                  <fieldset>
                    <legend className="text-sm font-medium mb-3 text-foreground">
                      Preferencia de respuesta{' '}
                      <span className="text-[var(--on-surface-muted)] font-normal">(opcional)</span>
                    </legend>
                    <div className="flex flex-wrap gap-6">
                      {(['whatsapp', 'email'] as const).map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-2 cursor-pointer text-sm font-medium capitalize"
                        >
                          <input
                            type="radio"
                            value={opt}
                            className="w-4 h-4 accent-primary"
                            {...register('preferenciaContacto')}
                          />
                          {opt === 'whatsapp' ? 'WhatsApp' : 'Email'}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* ── 11. Consentimiento ── */}
                <div className="col-span-full">
                  <FieldGroup
                    label=""
                    htmlFor={`${formId}-consentimiento`}
                    error={errors.consentimiento?.message}
                  >
                    <label
                      htmlFor={`${formId}-consentimiento`}
                      className="flex items-start gap-3 cursor-pointer group"
                    >
                      <input
                        id={`${formId}-consentimiento`}
                        type="checkbox"
                        className="mt-1 w-5 h-5 border-[3px] border-border accent-primary flex-shrink-0"
                        aria-describedby={
                          errors.consentimiento ? `${formId}-consentimiento-error` : undefined
                        }
                        aria-invalid={!!errors.consentimiento}
                        {...register('consentimiento', {
                          required: 'Debes aceptar el consentimiento para continuar.',
                        })}
                      />
                      <span className="text-sm text-[var(--on-surface-muted)] leading-relaxed">
                        Autorizo que Quad Rugby Chile me contacte para responder a mi mensaje. No
                        compartiremos tus datos con terceros.{' '}
                        <a href="/privacidad" className="text-[var(--link)]">
                          Política de privacidad
                        </a>
                        .
                        <span className="text-primary ml-1" aria-hidden="true">
                          *
                        </span>
                      </span>
                    </label>
                  </FieldGroup>
                </div>

                {/* ── Submit ── */}
                <div className="col-span-full pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground border-[3px] border-primary shadow-[var(--shadow-hard-sm)] hover:shadow-[var(--shadow-hard)] hover:-translate-x-1 hover:-translate-y-1 transition-all font-bold uppercase tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] min-w-[180px] justify-center"
                    aria-live="polite"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
