import React from 'react';

export const Mision = () => {
  return (
    <section className="mision" id="nosotros">
      <div className="container two-col">
        <div className="mision-text">
          <p className="label">NUESTRA MISIÓN</p>
          <h2>
            Un Faro de Esperanza<br />
            para las naciones
          </h2>
          <p>
            Estamos comprometidos con la transformación espiritual de nuestra ciudad. Portal del Cielo es más que un
            lugar; es una comunidad vibrante donde cada persona encuentra su centro en el amor incondicional de Dios.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-num">20+</span>
              <span className="stat-label">Años en Salta</span>
            </div>
            <div className="stat">
              <span className="stat-num">1000+</span>
              <span className="stat-label">Vidas alcanzadas</span>
            </div>
          </div>
        </div>
        <div className="mision-img">
          <div className="img-placeholder stars-bg">
            <div className="stars-overlay-text">Mirando las Estrellas</div>
          </div>
        </div>
      </div>
    </section>
  );
};
