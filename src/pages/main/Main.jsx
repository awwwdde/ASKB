import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './main.scss';

// Массив услуг с заголовками, описаниями и цветами фона
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
  // Создаем ссылку для отслеживания прокрутки
  const ref = useRef(null);
  // Получаем прогресс прокрутки в пределах целевого элемента (ref)
  const { scrollYProgress } = useScroll({ target: ref });
  // Преобразуем прогресс прокрутки в масштаб (от 0.8 до 1.2)
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  // Анимации для каждой буквы
  const letterAnimations = [
    { y: [-5, 5, -5] }, // A
    { y: [5, -5, 5] },  // S
    { y: [-5, 5, -5] }, // K
    { y: [5, -5, 5] },  // B
    { y: [-5, 5, -5] }, // R
    { y: [5, -5, 5] },  // O
    { y: [-5, 5, -5] }, // W
    { y: [5, -5, 5] },  // S
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }} // Начальное состояние секции (прозрачность 0)
        animate={{ opacity: 1 }} // Конечное состояние секции (прозрачность 1)
        transition={{ duration: 1.5 }} // Продолжительность анимации
      >
        <motion.div 
          className="hero-content"
          whileInView={{ y: 0, opacity: 1 }} // Состояние при попадании в поле зрения
          initial={{ y: 50, opacity: 0 }} // Начальное состояние (смещение по Y и прозрачность)
          viewport={{ once: true }} // Анимация срабатывает только один раз при попадании в поле зрения
        >
          <div className="gradient-title-container">
            {Array.from('ASKBROWS').map((letter, index) => (
              <motion.span 
                key={index}
                className="gradient-letter"
                initial={{ y: 0 }}
                animate={{ y: letterAnimations[index].y }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <p className="subtitle">MOSCOW. 2025</p>
          {/* Добавляем стрелку для прокрутки */}
          <motion.div 
            className="scroll-down-indicator"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span>↓</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        className="grid-section"
        ref={ref} // Привязываем реф к секции для отслеживания прокрутки
        style={{ scale }} // Применяем масштабирование на основе прогресса прокрутки
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
              whileHover={{ scale: 1.05 }} // При наведении увеличиваем масштаб карточки
              transition={{ type: 'spring', stiffness: 300 }} // Настройка пружинной анимации
            >
              <div 
                className="card-bg" 
                style={{ backgroundColor: service.color }} // Устанавливаем фоновый цвет карточки
              />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="reveal-button" aria-label={`Подробнее о ${service.title}`}> {/* Добавляем доступность через aria-label */}
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
          whileInView={{ opacity: 1, x: 0 }} // При попадании в поле зрения плавно появляется
          initial={{ opacity: 0, x: -50 }} // Начальное состояние (прозрачность и смещение по X)
          viewport={{ once: true }} // Анимация срабатывает только один раз при попадании в поле зрения
        >
          <h4>100% Гипоаллергенно</h4>
          <p>Используем только сертифицированные материалы</p>
        </motion.div>
        
        <motion.div 
          className="feature"
          whileInView={{ opacity: 1, x: 0 }} // При попадании в поле зрения плавно появляется
          initial={{ opacity: 0, x: 50 }} // Начальное состояние (прозрачность и смещение по X)
          viewport={{ once: true }} // Анимация срабатывает только один раз при попадании в поле зрения
        >
          <h4>5 лет опыта</h4>
          <p>Профессиональное выполнение процедур</p>
        </motion.div>
      </section>
    </div>
  );
}