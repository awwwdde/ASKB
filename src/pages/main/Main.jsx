import { motion } from 'framer-motion';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <motion.div 
        className="main-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="main-block_first"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="main-block_first--title">ASKBROWS</h1>
        </motion.div>
        <motion.div 
          className="main-block_second"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img src="" alt="" className="main-block_second--img" />
          <motion.div 
            className="main-block_second--text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.div 
              className="main-block_second--text-title"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Профессиональный <br/> уход за взглядом
            </motion.div>
            <motion.div 
              className="main-block_second--text-subtitle"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Обеспечу максимальную красоту
              <motion.button 
        className="main-block_second--text-subtitle-button"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <span className="button-text">В телеграмм</span>
        <span className="arrow"></span>
      </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;