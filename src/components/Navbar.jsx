import { useState, useEffect } from 'react';

export function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 40;
          setIsScrolled(shouldBeScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo">Portal del Cielo</a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-links">
          <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#nosotros" onClick={handleLinkClick}>Sobre Nosotros</a></li>
          <li><a href="#oracion" onClick={handleLinkClick}>Pedidos de oración</a></li>
          <li><a href="#ministerios" onClick={handleLinkClick}>Nuestros ministerios</a></li>
          <li><a href="#encuentros" onClick={handleLinkClick}>Calendario</a></li>
          <li className="nav-mobile-cta">
            <a href="#oracion" className="btn btn-primary nav-cta-mobile" onClick={handleLinkClick}>Contáctanos</a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#oracion" className="nav-cta">Contáctanos</a>
          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
            </svg>
            <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.446z"/>
            </svg>
          </button>

          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            id="hamburger"
            aria-label="Menú"
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-links"
            onClick={() => setMobileMenuOpen(prev => !prev)}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
