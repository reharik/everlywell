import './Recipe.css';
import heart from './../assets/heart.svg'
import leftArrow from './../assets/left-arrow.svg'
import PropTypes from 'prop-types';
import React from 'react';

const Recipe= ({
   errorMessage,
   handleClose,
   ingredients,
   recipe,
}) => {

  return (
    <div className="Recipe">
      <div className="Recipe-header">
        <img
          src={ leftArrow }
          className="Recipe-icon"
          alt="back to list"
          onClick={ handleClose }
        />
        <img src={ heart } className="Recipe-icon" alt="mark favorite" />
      </div>
      <img className="Recipe-image" src={ recipe.strMealThumb } width='40%' alt="meal"/>
      <div className="Recipe-title">
        { recipe.strMeal }
      </div>
      <div className="Recipe-ingredients">
      { ingredients.map(item => (
        <span key={ item } className="Recipe-ingredient">{ item }</span>
      ))}
      </div>
      <div className="Recipe-title">
        Directions
      </div>
      <div className="Recipe-instructions">
        { recipe.strInstructions }
      </div>
    </div>
  );
};

Recipe.propTypes = {
  errorMessage: PropTypes.string,
  recipe: PropTypes.object,
};

export default Recipe;
