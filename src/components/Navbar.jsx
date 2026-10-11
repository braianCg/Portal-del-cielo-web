import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Throttle scroll handling with requestAnimationFrame + passive listener (as in bolt.md)
  useEffect(() => {
    let scrollTicking = false;

    const handleScroll = () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          const shouldBeScrolled = window.scrollY > 40;
          setIsScrolled(shouldBeScrolled);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active link highlighting
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => sectionObserver.observe(s));
    return () => sectionObserver.disconnect();
  }, []);

  // Close mobile nav on Escape key or outside click
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
    <nav id="navbar" className={isScrolled ? 'scrolled' : ''} aria-label="Navegación principal">
      <div className="nav-inner">
        <a href="#inicio" className="nav-logo" onClick={handleLinkClick}>
          Portal del Cielo
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-links">
          <li>
            <a
              href="#inicio"
              className={activeSection === 'inicio' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              className={activeSection === 'nosotros' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              href="#oracion"
              className={activeSection === 'oracion' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Pedidos de oración
            </a>
          </li>
          <li>
            <a
              href="#ministerios"
              className={activeSection === 'ministerios' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Nuestros ministerios
            </a>
          </li>
          <li>
            <a
              href="#encuentros"
              className={activeSection === 'encuentros' ? 'active' : ''}
              onClick={handleLinkClick}
            >
              Calendario
            </a>
          </li>
          <li className="nav-mobile-cta">
            <a href="#oracion" className="btn btn-primary nav-cta-mobile" onClick={handleLinkClick}>
              Contáctanos
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#oracion" className="nav-cta">
            Contáctanos
          </a>

          <button
            id="theme-toggle"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            <svg
              className="sun-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg
              className="moon-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.446z" />
            </svg>
          </button>

          <button
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}
            id="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú principal"
            aria-expanded={mobileMenuOpen}
            aria-controls="nav-links"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
