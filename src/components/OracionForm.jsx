import React, { useState, useRef, useEffect } from 'react';

export const OracionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.focus();
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="oracion-section" id="oracion">
      <div className="container">
        <p className="label">ESTAMOS CONTIGO</p>
        <h2>Pedido de Oración</h2>
        <blockquote>
          "Donde dos o tres se reúnan en mi nombre, allí estoy yo en medio de ellos." Creemos en el poder de la
          intercesión. Déjanos tu petición especial y nuestra cadena de oración estará clamando por tu necesidad.
        </blockquote>

        {!submitted ? (
          <form className="oracion-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="peticion">Tu petición de oración</label>
              <textarea
                id="peticion"
                placeholder="¿Cómo podemos orar por ti?"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={submitting}
              aria-busy={submitting}
            >
              {submitting ? (
                <span className="btn-loading-state">
                  <svg className="spinner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2 a10 10 0 0 1 10 10" strokeLinecap="round" />
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Enviar pedido ➤'
              )}
            </button>
          </form>
        ) : (
          <div
            id="form-success"
            className="form-success"
            ref={successRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
          >
            ¡Gracias! Tu pedido ha sido recibido. Estaremos orando por ti. 🙏
          </div>
        )}
      </div>
    </section>
  );
};
