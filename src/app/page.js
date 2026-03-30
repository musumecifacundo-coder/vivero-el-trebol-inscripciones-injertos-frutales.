import HeroForm from "@/components/HeroForm";

export const metadata = {
  title: "Taller Práctico de Injertos | Vivero El Trébol",
  description: "Aprendé a injertar y llevate tus propias plantas frutales.",
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="text-center fade-in delay-1">
            <span className="tag">Vivero El Trébol</span>
            <h1>Taller Práctico de Injertos en Frutales</h1>
            <p className="mb-6 mb-8 text-center" style={{fontSize: "1.1rem", color: "var(--color-text-light)"}}>
              Aprendé a injertar desde cero y llevate tus propias plantas a casa.
            </p>
          </div>
          
          <div className="hero-stats fade-in delay-2">
            <div className="stat-row">
              <span className="stat-icon">📅</span>
              <span className="stat-text">Sábado 11 de Abril</span>
            </div>
            <div className="stat-row">
              <span className="stat-icon">💰</span>
              <span className="stat-text">Valor: $20.000</span>
            </div>
          </div>
          
          <HeroForm />
        </div>
      </section>

      <section className="details-section">
        <div className="container fade-in delay-3">
          <h2>En este taller lograrás:</h2>
          <ul className="learning-list">
            <li>
              <span className="learning-icon">✂️</span>
              <span>Dominar técnicas de injerto clásicas (púa y yema).</span>
            </li>
            <li>
              <span className="learning-icon">🍎</span>
              <span>Práctica real paso a paso sobre ejemplares frutales.</span>
            </li>
            <li>
              <span className="learning-icon">🪴</span>
              <span>Te llevas los materiales y tu propia planta injertada.</span>
            </li>
            <li>
              <span className="learning-icon">✨</span>
              <span>No necesitás experiencia previa en jardinería.</span>
            </li>
          </ul>

          <div className="trust-badge">
            <div className="trust-avatar">
              <img src="/avatar.png" alt="Ing. Agrónomo Facundo Degui" />
            </div>
            <div className="trust-info">
              <p>Ing. Agrónomo Facundo Degui</p>
              <p>Experto en fruticultura. ¡Asegurá tu lugar, cupos limitados!</p>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container fade-in delay-3">
          <div className="location-card">
            <h2 className="location-title">📍 Ubicación</h2>
            <p style={{color: 'var(--color-surface-card)', fontWeight: '600', marginBottom: '8px'}}>Vivero El Trébol – Longchamps</p>
            <p style={{fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)'}}>Av. Hipólito Yrigoyen 18548, B1854 Longchamps</p>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Hipólito+Yrigoyen+18548,+Longchamps,+Provincia+de+Buenos+Aires" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              VER CÓMO LLEGAR
            </a>

            <div className="map-embed">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.7776340718583!2d-58.3890005!3d-34.86181429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd5213a58374f%3A0xac3dae859b09e473!2sAv.%20Hip%C3%B3lito%20Yrigoyen%2018548%2C%20B1854%20Longchamps%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sau!4v1774756819256!5m2!1sen!2sau" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
