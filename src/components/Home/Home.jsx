import Button from '../Button/Button';
import Container from '../Container/Container';
import arrow from '../../assets/images/arrow-left.svg';
import sofa from '../../assets/images/sofa.svg';
import lamp from '../../assets/images/lamp.svg';
import youtube from '../../assets/images/youtube.svg';
import lightLamp from '../../assets/images/light-lamp.svg';
import light from '../../assets/images/light.svg';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <section className="home">
      <Container>
        <div className="home__item">
          <div className="home__item-info">
            <motion.h1
              className="home__item-title"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}>
              Мебельные туры <br />
              <span>с полным сопровождением</span>
            </motion.h1>
            <motion.p
              className="home__item-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8 }}>
              <span>Экономия до 500% </span> по сравнению <br /> с заказами из Европы и РФ
            </motion.p>
            <Button>забронировать тур</Button>
            <div className="home__item-reserver">
              <motion.p
                className="home__item-small"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}>
                Выбирайте для себя лучшее. <br />
                Отправляйтесь в невероятное мебельное <br /> путешествие в Китай с нами!
              </motion.p>
              <motion.img
                className="home__item-arrow"
                src={arrow}
                alt="arrow"
                animate={{ x: [null, 100, 0] }}
                loading="lazy"
              />
            </div>

            <img className="home__item-sofa" src={sofa} alt="sofa"  loading="lazy"/>

            <div className="home__item-square">
              <motion.p>
                <span>
                  Собственная ТК – <br />{' '}
                </span>
                несём полную ответственность
              </motion.p>
              <motion.p>
                <span>
                  Лично убедитесь <br />
                </span>
                в качестве мебели
              </motion.p>
            </div>

            <div className="home__item-youtube">
              <motion.a
                href="https://www.youtube.com/watch?v=95P78dW_Uc4&t=1s&ab_channel=%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B5%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BEb2b-creative."
                target="_blanc"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}>
                <img src={youtube} alt="youtube" loading="lazy"/>
              </motion.a>
              <p>
                Узнайте <br /> больше о туре <br /> за 1 минуту
              </p>
            </div>

            <div className="home__item-box">
              <div className="home__item-exp">
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}>
                  15+ <br /> <p>лет опыта в мебельных турах</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}>
                  700+ <br /> <p>доставленных контейнеров</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}>
                  2+ <br /> <p>млрд руб. сэкономили клиентам на покупке мебели</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}>
                  15+ <br /> <p>15 опытных сотрудников в России</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}>
                  10+ <br /> <p>10 штатных сотрудников в Китае</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="home__item-svg">
        <img className="home__item-lamp" src={lamp} alt="lamp" loading="lazy"/>
        <motion.img
          className="home__item-light"
          src={light}
          alt="lamp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2  }}
          loading="lazy"
        />
        <motion.img
          className="home__item-ellipse"
          src={lightLamp}
          alt="lamp"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HomePage;
