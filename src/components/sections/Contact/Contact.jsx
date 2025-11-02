// src/components/sections/Contact/Contact.jsx
'use client';

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Contact.scss';

// Mapeo de íconos
const iconMap = {
  'map-marker': FaMapMarkerAlt,
  'phone': FaPhone,
  'envelope': FaEnvelope,
};

const Contact = ({ title, info, formPlaceholders, ctaText }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (simulación). ¡Gracias!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 id="contact-title" className="contact__title">{title}</h2>
        </div>
        {/* Bloque de Información Superior */}
        <div className="contact__info-block">
          {info.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div key={item.title} className="contact__info-item">
                <Icon className="contact__info-icon" />
                <h3 className="contact__info-title">{item.title}</h3>
                <p className="contact__info-details">{item.details}</p>
              </div>
            );
          })}
        </div>

        {/* Formulario */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder={formPlaceholders.name}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              type="email"
              name="email"
              className="contact__form-input"
              placeholder={formPlaceholders.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder={formPlaceholders.subject}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact__form-group">
            <textarea
              name="message"
              className="contact__form-textarea"
              rows="8"
              placeholder={formPlaceholders.message}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="contact__form-footer">
            <button type="submit" className="contact__form-button">
              {ctaText}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;