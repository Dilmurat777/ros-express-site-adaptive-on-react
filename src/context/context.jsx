import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const CustomContext = createContext();

const Context = (props) => {

	const [modal, setModal] = useState(false)


  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

	function submitHandel(e) {
		e.preventDefault()
		closeModal()
	}

	const value = {
		submitHandel,
		closeModal,
		openModal,
		modal
	}

	return (
		<CustomContext.Provider value={value}>
			{props.children}
		</CustomContext.Provider>
	);
};

Context.propTypes = {
  children: PropTypes.any,
};

export default Context;