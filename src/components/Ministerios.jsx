import React from 'react';

export const Ministerios = () => {
  return (
    <section className="ministerios" id="ministerios">
      <div className="container">
        <div className="ministerios-header">
          <div>
            <p className="label">NUESTRA FAMILIA</p>
            <h2>Ministerios para cada etapa</h2>
          </div>
          <p>Encuentra el espacio donde tus talentos y pasión se encuentran con el propósito divino.</p>
        </div>
        <div className="ministerios-grid">
          <div className="min-card">
            <span className="min-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </span>
            <h4>Jóvenes Apasionados SOMOS 1</h4>
            <p>Una generación de jóvenes y adolescentes que vive la pasión y la esperanza de Dios con alegría y pasión.</p>
          </div>

          <div className="min-card">
            <span className="min-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </span>
            <h4>Alabanza</h4>
            <p>Exaltando a Dios y creando una atmósfera profunda de su presencia en cada reunión.</p>
          </div>

          <div className="min-card">
            <span className="min-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <h4>Familias con Propósito</h4>
            <p>Fortaleciendo el hogar desde los cimientos bíblicos y relacionales para los suyos.</p>
          </div>

          <div className="min-card">
            <span className="min-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                <line x1="9" y1="6" x2="16" y2="6" />
                <line x1="9" y1="10" x2="16" y2="10" />
              </svg>
            </span>
            <h4>Escuela de vida</h4>
            <p>Enseñanza que ancla en la Escritura, formando familias maduras y multiplicadoras.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
