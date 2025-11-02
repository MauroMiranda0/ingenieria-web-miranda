// src/components/sections/Testimonials/Testimonials.jsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. Importar el módulo Autoplay
import { Navigation, Autoplay } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Es buena práctica importar los estilos del módulo que usas

import './Testimonials.scss';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__container">
        <div className="testimonials__slider-wrapper">
          <Swiper
            // 2. Añadir Autoplay a la lista de módulos
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            // 3. Añadir la configuración del autoplay
            autoplay={{
              delay: 8000, // 8 segundos
              disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <img src={testimonial.image} alt={`Foto de ${testimonial.author}`} className="testimonial-slide__image" />
                <h4 className="testimonial-slide__author">{testimonial.author}</h4>
                <small className="testimonial-slide__position">{testimonial.position}</small>
                <p className="testimonial-slide__quote">"{testimonial.quote}"</p>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-navigation">
            <button className="swiper-button-prev-custom" aria-label="Testimonio anterior">
              <FaAngleLeft />
            </button>
            <button className="swiper-button-next-custom" aria-label="Siguiente testimonio">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;