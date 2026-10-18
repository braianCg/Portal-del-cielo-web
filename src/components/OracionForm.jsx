import React, { useState } from 'react';

export const OracionForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Basic client-side input validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorMsg('Por favor, completa todos los campos requeridos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setErrorMsg('Por favor, ingresa un correo electrónico válido.');
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
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  maxLength={100}
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
                  maxLength={254}
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
                maxLength={2000}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            {errorMsg && (
              <p className="form-error" style={{ color: '#e53e3e', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {errorMsg}
              </p>
            )}
            <button type="submit" className="btn btn-primary btn-submit" disabled={submitting}>
              {submitting ? 'Enviando...' : 'Enviar pedido ➤'}
            </button>
          </form>
        ) : (
          <div id="form-success" className="form-success">
            ¡Gracias! Tu pedido ha sido recibido. Estaremos orando por ti. 🙏
          </div>
        )}
      </div>
    </section>
  );
};
