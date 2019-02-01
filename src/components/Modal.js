import './modal.css'
import PropTypes from 'prop-types';
import React from 'react';
import RecipeDisplayContainer from './../containers/RecipeDisplayContainer';

const Modal = ({ handleClose, recipeId }) => {
  return (
    <div className="Modal Modal-display-block">
      <section className="Modal-body">
        <RecipeDisplayContainer
          handleClose={ handleClose }
          recipeId={ recipeId }/>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default Modal;
