import { useEffect } from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactDirect } from '../components/contact/ContactDirect';

/**
 * Design Rationale: Kinetic Brutalism V2 — Página de Contacto.
 * Claridad técnica y acción inmediata: Hero compacto con chips de anclaje,
 * formulario dinámico condicional como punto principal de captación,
 * canales directos (WhatsApp/Email/RRSS) como complemento abajo.
 * Validación onBlur, estado de éxito que reemplaza el formulario.
 */
export function Contact() {
  useEffect(() => {
    document.title = 'Contacto | Quad Rugby Chile';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Contáctanos para jugar, hacer voluntariado, ser árbitro o clasificador en Quad Rugby Chile. Escríbenos por formulario, WhatsApp, email o redes sociales.'
      );
    }
  }, []);

  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactDirect />
    </>
  );
}
