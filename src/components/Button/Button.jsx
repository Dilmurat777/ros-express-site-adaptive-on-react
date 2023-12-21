import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CustomContext } from '../../context/context';
import { motion } from 'framer-motion';

const Button = (props) => {
  const { submitHandel, closeModal, openModal, modal } = useContext(CustomContext);

  return (
    <>
      <motion.button
        className="main-button"
        onClick={openModal}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}>
        <span className="border__btn">{props.children}</span>
      </motion.button>

      {modal && (
        <div className="form">
          <span onClick={closeModal} className="form__close">
            &times;
          </span>
          <form className="form__box" onSubmit={submitHandel}>
            <input required type="text" placeholder="Имя" />
            <input required type="email" placeholder="Email" />
            <input required type="number" placeholder="тел." />
            <button className="form-btn">Отправить</button>
          </form>
        </div>
      )}
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
