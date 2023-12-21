import Container from '../Container/Container';
import cancel from '../../assets/images/cancel.svg';
import check from '../../assets/images/check.svg';
import sofaLeft from '../../assets/images/sofa-left.svg';
import plantLeft from '../../assets/images/plant-left.svg';
import plantRight from '../../assets/images/plant-right.svg';
import sofaRight from '../../assets/images/sofa-right.svg';
import tableRight from '../../assets/images/table-right.svg';
import telegram from '../../assets/images/tg.svg';
import vk from '../../assets/images/vk.svg';
import { motion } from 'framer-motion';

const Orders = () => {
  return (
    <section className="orders">
      <Container>
        <div className="orders__items">
          <motion.h2
            className="title"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            <span>95% магазинов</span> заказывают мебель из Китая и <br /> не только в России, но
            весь остальной мир!
          </motion.h2>
          <div className="orders__box">
            <div className="orders__left">
              <h3 className="orders__left-title">Онлайн покупка мебели из РФ, Европы и Китая</h3>
              <div className="orders__left-items">
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Ограниченный выбор на сайтах. Большинство фабрик РФ предлагает 5-10 стандартных
                    однообразных моделей.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Нельзя оценить заранее качество изделий и материалов.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Большой риск получить мебель, не соответствующую ожиданиям.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Приходится слепо доверять отзывам о производителе или посреднике.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Необходимо заказывать мебель, сантехнику и свет из разных магазинов и
                    переплачивать за доставку.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Известные и надежные европейские бренды на сегодняшний день недоступны к прямому
                    заказу из РФ.
                  </p>
                </div>
                <div className="orders__left-info">
                  <img src={cancel} alt="cancel" />
                  <p className="orders__left-text">
                    Переплата от 30 до 60% если вы покупаете у дистрибьютора, а не у производителя
                    напрямую.
                  </p>
                </div>
              </div>
            </div>

            <div className="orders__right">
              <h3 className="orders__right-title">Мебельный тур в Китай с РосЭкспресс</h3>
              <div className="orders__right-items">
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Прямой доступ к фабрикам-производителям и тысячам вариантов качественной мебели.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Доступ к эксклюзивным коллекциям мебели, не выставленным на продажу онлайн.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Вы лично удостоверитесь в высоком качестве: оцените материалы и рассмотрите
                    каждую деталь.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Проверите мебель в реальных условиях. Сможете сесть на стулья, раскрыть ящики
                    комода, разложить диван.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Купите в ходе тура всё необходимое для комплектации интерьера под ключ.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Погрузитесь в атмосферу, традиции и уникальную культуру Китая.
                  </p>
                </div>
                <div className="orders__right-info">
                  <img src={check} alt="check" />
                  <p className="orders__right-text">
                    Покупка напрямую от фабрики = экономия в 2-5 раз. Без посредников и скрытых
                    расходов. Чем больше объём мебели в вашем заказе, тем больше ваша выгода!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="orders__contact">
            <div className="orders__contact-items">
              <p className="orders__contact-text">
                Нужна помощь специалиста? <br /> Задайте свой вопрос
              </p>
              <div className="orders__contact-social">
                <img src={telegram} alt="telegram" />
                <img src={vk} alt="vk" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="orders__top-design">
        <div className="orders__right-design">
          <img className="orders__right-plant" src={plantRight} alt="plant" />
          <img className="orders__right-sofa" src={sofaRight} alt="sofa" />
          <img className="orders__right-table" src={tableRight} alt="sofa" />
        </div>

        <div className="orders__left-design">
          <img className="orders__right-plant plant-mobile" src={plantRight} alt="plant" />
          <img className="orders__left-plant" src={plantLeft} alt="plant" />
          <img className="orders__left-sofa" src={sofaLeft} alt="sofa" />
        </div>
      </div>
    </section>
  );
};

export default Orders;
