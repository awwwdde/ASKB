import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import debounce from 'lodash.debounce';
import './main.scss';

const Main = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const magneticRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleMagneticHover = useCallback(debounce((e) => {
    if (!isMounted || !magneticRef.current) return;
    
    const rect = magneticRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    magneticRef.current.style.setProperty('--x', `${x}px`);
    magneticRef.current.style.setProperty('--y', `${y}px`);
  }, 10), [isMounted]);

  return (
    <main className="main-container">
      {/* Параллакс-фон с градиентом */}
      <motion.div 
        className="parallax-layer"
        style={{ scale }}
      >
        <div className="gradient-overlay" />
        <div className="floating-shapes">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-shape"
              initial={{ y: 0, x: 0 }}
              animate={{ y: [0, 50, 0], x: [0, 20, 0] }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Бегущая строка */}
      <motion.div 
        className="marquee-track"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="marquee-content"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span>LASH ARTIST</span>
              <span className="separator">✦</span>
              <span>BROW DESIGN</span>
              <span className="separator">✦</span>
              <span>PREMIUM SERVICE</span>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* Герой-секция */}
      <section className="hero-grid">
        <motion.div 
          className="grid-item title-container"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="holographic-title">
            <span data-text="ASKBROWS">ASKBROWS</span>
          </h1>
          <motion.p 
            className="scroll-hint"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Scroll to explore ▽
          </motion.p>
        </motion.div>
        
        {/* Интерактивная карточка */}
        <motion.div 
          ref={magneticRef}
          className="grid-item contact-card magnetic-card"
          onMouseMove={handleMagneticHover}
          whileHover={{ scale: 1.05 }}
        >
          <div className="magnetic-aura" />
          <h3>Book Session</h3>
          <p>Moscow | Since 2018</p>
          <button className="flat-button">
            <span>Available →</span>
            <div className="button-hover" />
          </button>
        </motion.div>
      </section>

      {/* Секция услуг */}
      <section className="services-masonry" ref={servicesRef}>
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={i}
            className={`masonry-card ${i === 0 ? 'wide' : ''} ${i === 2 ? 'tall' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2 }}
          >
            <h2>0{i+1}/</h2>
            <p>{['Classic Extensions', 'Volume 2D-8D', 'Lash Lift', 'Brow Lamination'][i]}</p>
            <div className="card-deco" />
          </motion.div>
        ))}
      </section>

      {/* Плавающие частицы */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ y: 0, x: 0 }}
            animate={{ y: [0, 100, 0], x: [0, 50, 0] }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;