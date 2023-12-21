import line1 from './../../assets/images/line1.svg';
import line2 from './../../assets/images/line2.svg';
import line3 from './../../assets/images/line3.svg';
import line4 from './../../assets/images/line4.svg';
import line5 from './../../assets/images/line5.svg';
import color from './../../assets/images/ellipse-color.svg';
import ellipse from './../../assets/images/ellipse.svg';
import tur from './../../assets/images/tur.svg';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="services">
      <Container>
        <div className="services__items">
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            <span>Мебельные туры</span> в Фошань под ключ
          </motion.h2>
          <motion.p
            className="services__text"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            Предоставляем <span>полный спектр услуг</span> и несём полную <br />
            ответственность на каждом этапе:
          </motion.p>

          <div className="services__items-box">
            <div className="services__items-decors">
              <div className="services__items-left">
                <div className="services__items-decor">
                  <span className="services__items-point"></span>
                  <div className="services__items-number">01</div>
                  <div className="services__items-line">
                    <img src={line1} alt="line-decor" className="services__line-img" />
                  </div>
                </div>
                <div className="services__items-info">
                  <p>Организация поездки</p>
                  <span>От оформления визы до бронирования гостиницы</span>
                </div>
              </div>

              <div className="services__items-left-02">
                <div className="services__items-left">
                  <div className="services__items-decor">
                    <span className="services__items-point"></span>
                    <div className="services__items-number">02</div>
                    <div className="services__items-line">
                      <img src={line2} alt="line-decor" className="services__line-img" />
                    </div>
                  </div>
                  <div className="services__items-info">
                    <p>Контроль качества</p>
                    <span>
                      Не просто оформляем, а выполняем тщательную проверку: на складе производителя
                      и перед отправкой. Предоставляем вам видео и фотоотчёт перед отправкой
                    </span>
                  </div>
                </div>
              </div>

              <div className="services__items-left">
                <div className="services__items-decor">
                  <span className="services__items-point"></span>
                  <div className="services__items-number">03</div>
                  <div className="services__items-line">
                    <img src={line3} alt="line-decor" className="services__line-img" />
                  </div>
                </div>
                <div className="services__items-info">
                  <p>Оформление документов</p>
                  <span>
                    Готовим все сопроводительные бумаги, выполняем растаможивание и доставляем
                    товары прямо до вашей двери
                  </span>
                </div>
              </div>
            </div>

            <div className="services__items-decors">
              <div className="services__items-left-02">
                <div className="services__items-left">
                  <div className="services__items-decor decor-right">
                    <div className="services__items-number">04</div>
                    <span className="services__items-point"></span>
                    <div className="services__items-right">
                      <span className="services__items-svg">
                        <img src={line4} alt="line-decor" className="services__line-img" />
                      </span>
                    </div>
                  </div>
                  <div className="services__items-info right-info">
                    <p>Транспортировка</p>
                    <span>
                      Перевозим собственной ТК. Гарантируем, что все будет доставлено без
                      повреждений
                    </span>
                  </div>
                </div>
              </div>
              <div className="services__items-left">
                <div className="services__items-decor decor-right">
                  <div className="services__items-number">05</div>
                  <span className="services__items-point"></span>
                  <div className="services__items-right">
                    <span className="services__items-svg">
                      <img src={line5} alt="line-decor" className="services__line-img" />
                    </span>
                  </div>
                </div>
                <div className="services__items-info right-info">
                  <p>
                    Персональный <br /> менеджер-переводчик
                  </p>

                  <span>Более 10 лет опыта индивидуального подбора мебели</span>
                </div>
                <div className="services__items-decor decor-btn">
                  <Button>забронировать тур</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services__tur">
          <img className="services__tur-bg" src={color} alt="" />
          <img className="services__tur-ellipse" src={ellipse} alt="" />
          <img className="services__tur-tur" src={tur} alt="" />
        </div>
        <span className="bg"></span>
      </Container>
    </section>
  );
};

export default Services;
