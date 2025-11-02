// src/components/common/AnimateOnScroll/AnimateOnScroll.jsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import './AnimateOnScroll.scss';

const AnimateOnScroll = ({ children, animation = 'fadeInUp', delay = '0s', duration = '0.8s' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Animación solo una vez
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `animate-on-scroll ${animation} ${isVisible ? 'is-visible' : ''}`;
  const style = {
    '--animation-delay': delay,
    '--animation-duration': duration,
  };

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
};

export default AnimateOnScroll;