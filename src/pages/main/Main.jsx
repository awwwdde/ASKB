import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './main.scss';

const services = [
  { 
    title: 'Ламинирование Бровей', 
    desc: 'Идеальная форма на 6-8 недель', 
    color: '#F5E9E1'
  },
  { 
    title: 'Ламинирование Ресниц', 
    desc: 'Эффект открытого взгляда', 
    color: '#E8DED5'
  },
  { 
    title: 'Коррекция', 
    desc: 'Профессиональная архитектура', 
    color: '#F2EAE2'
  },
];

export default function Main() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="hero-content"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="gradient-title">ASKBROWS</h1>
          <p className="subtitle">Искусство естественной красоты</p>
        </motion.div>
        <motion.div 
          className="scrolling-text"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeIn' }}
        >
          Премиум уход • Индивидуальный подход • Сертифицированные материалы • Премиум уход • Индивидуальный подход • Сертифицированные материалы • Премиум уход • Индивидуальный подход • Сертифицированные материалы • Премиум уход • Индивидуальный подход • Сертифицированные материалы • Премиум уход • Индивидуальный подход • Сертифицированные материалы •
        </motion.div>
      </motion.section>
      {/* Services Grid */}
      <motion.section 
        className="grid-section"
        ref={ref}
        style={{ scale }}
      >
        <div className="grid-header">
          <h2>Наши услуги</h2>
          <p>Инновационные техники премиум-класса</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div 
                className="card-bg" 
                style={{ backgroundColor: service.color }}
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="reveal-button" aria-label={`Подробнее о ${service.title}`}>
                Подробнее →
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Features Section */}
      <section className="features">
        <motion.div 
          className="feature"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
        >
          <h4>Полная дезинфекция</h4>
          <p>Используем только сертифицированные материалы</p>
        </motion.div>
        
        <motion.div 
          className="feature"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
        >
          <h4>2 года опыта</h4>
          <p>Профессиональное выполнение процедур</p>
        </motion.div>
      </section>
    </div>
  );
}