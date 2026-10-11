import React from 'react';

export const Invasion = () => {
  return (
    <section className="invasion">
      <div className="container">
        <div className="invasion-header">
          <h2>Invasión del Amor de Dios</h2>
          <p>
            Un movimiento sobrenatural que rompe barreras y lleva el poder sanador de Jesús a cada rincón de nuestra ciudad, a cada barrio y hogar.
          </p>
        </div>
        <div className="cards-grid">
          <div className="card card-wide card-dark">
            <div className="card-icon">
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
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
                <path d="M10 6h4" />
                <path d="M10 10h4" />
                <path d="M10 14h4" />
                <path d="M10 18h4" />
              </svg>
            </div>
            <h3>Impacto en los Barrios</h3>
            <p>Llevamos esperanza y transformación a los barrios de Cerrillos y nuestra ciudad.</p>
          </div>

          <div className="card card-accent">
            <div className="card-icon">
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
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
                <path d="M18 4a4 4 0 0 1 4 4" />
                <path d="M20 1a7 7 0 0 1 7 7" />
              </svg>
            </div>
            <h3>Reuniones en la casa y transmisiones</h3>
            <p>Un lugar de encuentro para todos los hijos de la casa. Transmisiones en vivo de cada reunión.</p>
          </div>

          <div className="card card-dark">
            <div className="card-icon">
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
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <h3>Cadena de Oración</h3>
            <p>Intercesores las 24hrs por cada petición de oración.</p>
          </div>

          <div className="card card-purple card-wide">
            <div className="card-icon">
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
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.446z" />
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3>Cierre de Gloria</h3>
            <p>Testimonios impactantes y milagros que confirman que para Dios nada es imposible.</p>
            <a href="#oracion" className="link-arrow">
              Leer testimonios →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
