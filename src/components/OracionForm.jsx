import React, { useState } from 'react';

export const OracionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
              <div className="label-with-counter">
                <label htmlFor="peticion">Tu petición de oración</label>
                <span className="char-counter" aria-live="polite">
                  {formData.message.length}/500
                </span>
              </div>
              <textarea
                id="peticion"
                placeholder="¿Cómo podemos orar por ti?"
                rows={4}
                maxLength={500}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
              {submitting ? (
                <span className="btn-loading">
                  <svg className="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.3"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Enviar pedido ➤'
              )}
            </button>
          </form>
        ) : (
          <div id="form-success" className="form-success" role="status" aria-live="polite">
            ¡Gracias! Tu pedido ha sido recibido. Estaremos orando por ti. 🙏
          </div>
        )}
      </div>
    </section>
  );
};
