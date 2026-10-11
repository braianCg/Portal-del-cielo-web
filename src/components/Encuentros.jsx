import React from 'react';

export const Encuentros = () => {
  return (
    <section className="encuentros" id="encuentros">
      <div className="container">
        <h2>Nuestros Encuentros</h2>
        <div className="encuentros-list">
          <div className="encuentro-item">
            <span className="enc-icon enc-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </span>
            <div className="enc-info">
              <h4>Reunión General</h4>
              <p>Alabanza colectiva, predicación de alabanza y poder.</p>
            </div>
            <div className="enc-time">
              <span className="day">Dom</span>
              <span className="time">10:00 AM</span>
              <span className="extra">Y 6:00 PM</span>
            </div>
          </div>

          <div className="encuentro-item">
            <span className="enc-icon enc-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </span>
            <div className="enc-info">
              <h4>Reunión de Oración</h4>
              <p>Intercesión y búsqueda profunda del Espíritu Santo.</p>
            </div>
            <div className="enc-time">
              <span className="day">Mié</span>
              <span className="time">8:00 PM</span>
              <span className="extra">TODA LA CONGREGACIÓN</span>
            </div>
          </div>

          <div className="encuentro-item">
            <span className="enc-icon enc-gold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-icon"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div className="enc-info">
              <h4>Célula de Jóvenes</h4>
              <p>Comunidad, amistad y crecimiento espiritual.</p>
            </div>
            <div className="enc-time">
              <span className="day">Sáb</span>
              <span className="time">6:30 PM</span>
              <span className="extra">AUDITORIO JÓVEN</span>
            </div>
          </div>
        </div>

        <div className="primera-vez">
          <h3>¿Es tu primera vez?</h3>
          <p>
            Queremos que te sientas como en casa desde el primer momento. Contamos con estacionamiento gratuito y un
            equipo de recepción especial para recibirte.
          </p>
          <a href="#oracion" className="link-arrow">
            Planificar mi visita →
          </a>
        </div>
      </div>
    </section>
  );
};
