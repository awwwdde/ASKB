import { motion } from 'framer-motion';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main-block">
        <div className="main-block_first">
          <h1 className="main-block_first--title">ASKBROWS</h1>
        </div>
        <div className="main-block_second">
          <img src="" alt="" className="main-block_second--img" />
          <div className="main-block_second--text-title">Профессиональный <br/> уход за взглядом</div>
          <div className="main-block_second--text-subtitle">Создаю решения, основанные на реальных потребностях клиентов </div>
        </div>
      </div>
    </div>
  );
};

export default Main;