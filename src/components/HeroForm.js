"use client";

import { useState } from "react";

export default function HeroForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", instagram: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setLoading(true);

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, source: window.location.search || 'Direct' }),
      });
    } catch (error) {
      console.error("Error al guardar:", error);
    } finally {
      const numero = "541159270216"; 
      const curso = "Injertos frutales";
      const mensaje = `Hola mi nombre es ${formData.name}.
Ya me anoté en el curso de ${curso}. 
¿Cuando puedan podrían enviarme el link de pago para completar la inscripción?
Gracias.`;
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.location.href = url;
    }
  };

  return (
    <div className="form-card delay-3">
      <h3 className="form-title">Reservá tu lugar hoy</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Tu Nombre</label>
          <input 
            type="text" 
            id="name"
            className="form-input" 
            placeholder="Ej: Laura" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group mb-6">
          <label htmlFor="phone" className="form-label">WhatsApp</label>
          <input 
            type="tel"
            id="phone" 
            className="form-input" 
            placeholder="Dejanos tu celular" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
            disabled={loading}
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="instagram" className="form-label">Instagram (Opcional)</label>
          <div className="input-with-icon">
            <span className="input-icon">@</span>
            <input 
              type="text"
              id="instagram" 
              className="form-input form-input-at" 
              placeholder="tu_usuario" 
              value={formData.instagram}
              onChange={(e) => setFormData({...formData, instagram: e.target.value})}
              disabled={loading}
            />
          </div>
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading || !formData.name || !formData.phone}
        >
          {loading ? 'Confirmando...' : 'QUIERO MI LUGAR'}
        </button>
      </form>
    </div>
  );
}
