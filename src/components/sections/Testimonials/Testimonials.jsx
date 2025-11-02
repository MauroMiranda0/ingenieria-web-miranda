// src/components/sections/Testimonials/Testimonials.jsx
'use client'; // Directiva necesaria para componentes con interactividad en el App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';

import './Testimonials.scss';

const Testimonials = ({ testimonials }) => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__container">
        {/* El ID del título no es necesario aquí ya que no hay un título visible */}
        <div className="testimonials__slider-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
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
          
          {/* Botones de navegación personalizados */}
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