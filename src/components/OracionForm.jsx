import React, { useState } from 'react';

// SECURITY: Enforce maximum input length limits and validation on user input
// to prevent Denial of Service (DoS), payload overflow, and malformed submissions.
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const OracionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Sanitize input values by trimming leading/trailing whitespace
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName || cleanName.length > MAX_NAME_LENGTH) {
      setError('Por favor, ingresa un nombre válido.');
      return;
    }
    if (!cleanEmail || cleanEmail.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(cleanEmail)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (!cleanMessage || cleanMessage.length > MAX_MESSAGE_LENGTH) {
      setError('Por favor, ingresa tu petición de oración.');
      return;
    }

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
            {error && <div className="form-error" role="alert" style={{ color: '#ef4444', marginBottom: '1rem' }}>{error}</div>}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  maxLength={MAX_NAME_LENGTH}
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
                  maxLength={MAX_EMAIL_LENGTH}
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
                maxLength={MAX_MESSAGE_LENGTH}
                aria-describedby="peticion-char-count"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
              <div className="form-group-footer">
                <span id="peticion-char-count" className="char-counter">
                  {formData.message.length} / {MAX_MESSAGE_LENGTH} caracteres
                </span>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-submit" disabled={submitting} aria-busy={submitting}>
              {submitting ? (
                <span className="btn-loading-content">
                  <svg className="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
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
