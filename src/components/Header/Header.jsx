import Container from '../Container/Container';
import logo from './../../assets/images/logo.svg';
import youtube from './../../assets/images/you.svg';
import telegram from './../../assets/images/tg.svg';
import vk from './../../assets/images/vk.svg';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';


const Header = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="header">
      <Container>
        <div className="header__item">
          <motion.div
            className="header__item-logo"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
            <p className="header__item-text">
              Индивидуальные <br /> мебельные туры в Китай для <br /> частных клиентов и бизнеса
            </p>
          </motion.div>

          <div className="header__item-burger" onClick={() => setIsOpen(!isOpen)}>
            <GiHamburgerMenu size={30} />
          </div>

          <div className={`header__item-contacts ${isOpen ? 'active' : ''}`}  onClick={() => setIsOpen(!isOpen)}>
            <div className="header__item-menu">
              <div className="header__item-close" onClick={() => setIsOpen(!isOpen)}>
                <IoMdClose size={30} />
              </div>

              <div className="header__item-name">
                <h2>Ros Express</h2>
              </div>
              <motion.div
                className="header__item-email"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3 }}>
                <p>E-mail:</p>
                <a href="mailto:rosexpress-msk@yandex.ru" target="_blanc">
                  rosexpress-msk@yandex.ru
                </a>
              </motion.div>

              <motion.div
                className="header__item-socials"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8 }}>
                <a
                  href="https://www.youtube.com/watch?v=95P78dW_Uc4&ab_channel=%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%B8%D0%BD%D0%B3%D0%BE%D0%B2%D0%BE%D0%B5%D0%B0%D0%B3%D0%B5%D0%BD%D1%82%D1%81%D1%82%D0%B2%D0%BEb2b-creative."
                  target="_blanc">
                  <img src={youtube} alt="youTube" />
                </a>
                <a href="https://t.me/mrDilmurat" target="_blanc">
                  <img src={telegram} alt="Telegram" />
                </a>
                <a href="https://vk.com/" target="_blanc">
                  <img src={vk} alt="vk" />
                </a>
              </motion.div>

              <motion.div
                className="header__item-phone"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}>
                <a href="tel:88003338901">
                  8 (800) 333-89-01 <br />
                  <span>Обратный звонок</span>
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
