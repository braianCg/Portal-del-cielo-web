export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">Bienvenido a</p>
        <h1>Portal del Cielo<br /><span>Salta</span></h1>
        <p className="hero-sub"><em>Año de expansión, multiplicación y crecimiento</em></p>
        <div className="hero-btns">
          <a href="#encuentros" className="btn btn-primary">Conocer Horarios</a>
          <a href="#nosotros" className="btn btn-ghost">Nuestra Historia</a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span></span>
      </div>
    </section>
  );
}
