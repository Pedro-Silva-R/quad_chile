import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'El Deporte', href: '/el-deporte' },
    { label: 'Participa', href: '/participa' },
    { label: 'Reglas', href: '/reglas' },
    { label: 'Clasificación', href: '/clasificacion' },    
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] bg-background border-b-[3px] border-border">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--edge-safe)]">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo & Status */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3 group no-underline">
              <div className="w-10 h-10 border-2 border-border flex items-center justify-center overflow-hidden relative">
                {/* Mobile / No-hover Logo */}
                <img 
                  src="/assets/logo_og.webp" 
                  alt="Quad Rugby Chile Logo" 
                  className="w-full h-full object-cover md:hidden block"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-foreground font-display font-bold text-xl">QR</span>';
                  }}
                />
                
                {/* Desktop / Hover Logo */}
                <img 
                  src="/assets/logo.webp" 
                  alt="Quad Rugby Chile Logo" 
                  className="w-full h-full object-cover hidden md:block transition-all duration-300 dark:brightness-0 dark:invert brightness-0 group-hover:brightness-100 group-hover:invert-0 dark:group-hover:brightness-100 dark:group-hover:invert-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-foreground font-display font-bold text-xl">QR</span>';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-foreground text-lg leading-none">Quad Rugby</span>
                <span className="font-display text-[var(--brand-metal)] text-sm leading-none">Chile</span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="technical-label text-primary">SYS.ON</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-foreground no-underline hover:underline font-semibold transition-all glitch-hover"
              >
                <span className="glitch-text" data-text={link.label}>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/participa"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground border-[3px] border-border shadow-[4px_4px_0_var(--border)] font-semibold no-underline transition-transform hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              Participa
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-2.5 border-2 border-border hover:bg-surface-dim transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden p-2.5 border-2 border-border hover:bg-surface-dim transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-16 bg-background z-[var(--z-fixed)] overflow-y-auto border-t-[3px] border-border"
        >
          <nav className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 border-2 border-border hover:bg-surface-dim text-foreground font-semibold no-underline transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/participa"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 px-4 py-3 bg-primary text-primary-foreground border-[3px] border-border font-semibold text-center no-underline shadow-[4px_4px_0_var(--border)] transition-transform hover:-translate-x-1 hover:-translate-y-1"
            >
              Participa
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
