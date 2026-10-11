export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Portal del Cielo</h3>
          <p><em>"Un portal abierto hacia la presencia de Dios en el corazón de Salta."</em></p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Sobre</a>
          <a href="#oracion">Oración</a>
          <a href="#ministerios">Ministerios</a>
          <a href="#encuentros">Calendario</a>
          <a href="#oracion">Contáctanos</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Portal del Cielo Salta. Desarrollado con amor y propósito.</p>
      </div>
    </footer>
  );
}
