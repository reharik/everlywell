import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Recipe from './../components/Recipe';
import { connect } from 'react-redux';
import { fetchRecipe } from './../redux/recipeList';

class RecipeDisplayContainer extends Component {
  render() {
    return this.props.recipe != null
      ? <Recipe {...this.props} />
      : null;
  }
}

RecipeDisplayContainer.propTypes = {
  errorMessage: PropTypes.string,
  handleClose: PropTypes.func,
  isFetching: PropTypes.bool,
  recipe: PropTypes.object,
  recipeId: PropTypes.string,
};

function mapStateToProps(state = [], props) {
  const recipe = state.recipeList.recipes.find(item => item.idMeal === props.recipeId);
  const ingredients = recipe != null
    ? Object.keys(recipe)
      .filter(item => {
        return item.startsWith('strIngredient')
          && recipe[item]
          && recipe[item].length > 0
      })
      .map((item, i) => `${recipe[item]}: ${recipe['strMeasure'+(i+1)]}`)
    :[];

  return {
    errorMessage: state.recipeList.errorMessage,
    handleClose: props.handleClose,
    ingredients,
    isFetching: state.recipeList.isFetching,
    recipe,
    recipeId: props.recipeId,
  };
}

export default connect(
  mapStateToProps,
  {fetchRecipe}
)(RecipeDisplayContainer);


