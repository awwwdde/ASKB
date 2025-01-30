import { motion } from 'framer-motion';
import './main.scss';
import { FiArrowUpRight } from 'react-icons/fi';
import jena from '../../graphics/img/jena.png'
const services = [
  'Профессиональный уход',
  'Гипоаллергенная обработка',
  'Качественные материалы',
  'Оформление бровей'
];

const portfolioImages = [
  jena,
  jena,
  jena,
  jena
];

const Main = () => {
  return (
    <div className="main-page">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <span className="logo">ASKBROWS</span>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="title"
          >
            Профессиональный
            <br />
            уход за взглядом
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="right-column"
          >
            <p className="subtitle">
              Создаю решения, основанные
              <br />
              на реальных потребностях клиентов
            </p>
            <motion.a
              href="https://t.me/myauchelki"
              target="_blank"
              whileHover={{ x: 5 }}
              className="cta-button"
            >
              Запись через Telegram
              <FiArrowUpRight className="arrow-icon" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="portfolio">
              <div className="gallery-row">
              {services.map((service, index) => (
                <motion.div
                   key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="gallery-item"
                  >
                    <div className="image-wrapper">
                      <img 
                        src={portfolioImages[index] || 'placeholder.jpg'} 
                       alt={service} 
                      />
                    </div>
                    <div className="item-info">
                      <span className="number">0{index + 1}</span>
                      <h3>{service}</h3>
                    </div>
              </motion.div>
            ))}
        </div>
      </section>
      <footer className="footer">
        <p className="footer-text">
          made by{' '}
        <a
        href="https://github.com/awwwdde"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
        >
        awwwdde
        </a>{' '}
        with ❤️
        </p>
      </footer>
    </div>
  );
};

export default Main;