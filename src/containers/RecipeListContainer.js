import PropTypes from 'prop-types';
import React, { Component } from 'react';
import RecipeList from './../components/RecipeList';
import { connect } from 'react-redux';
import { fetchRecipes } from './../redux/recipeList';
import { setSpecials } from "../redux/specialsList";
import { withRouter } from "react-router";
import {random} from 'lodash';
import {uniq} from 'lodash';

class RecipeListContainer extends Component {
  state = {};

  componentDidMount() {
    if(this.props.recipesLength === 0) {
      this.props.fetchRecipes('a');
    }
  }

  static getDerivedStateFromProps(props) {

    if (props.recipesLength > 0
      && props.specialsDate !== new Date().toDateString()) {
      let specials = [];
      while (specials.length !== 5) {
        specials.push(random(0, props.recipesLength));
        specials = uniq(specials);
      }
      props.setSpecials(specials);
    }

    return null;
  }

  render() {
    return <RecipeList {...this.props} />;
  }
}

RecipeListContainer.propTypes = {
  fetchRecipes: PropTypes.func,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  recipes: PropTypes.array,
  recipeId: PropTypes.string,
  match: PropTypes.object,
  history: PropTypes.object,
  recipesLength: PropTypes.number,
  specialsDate: PropTypes.string
};

function mapStateToProps(state = [], props) {
  const recipeId = props.match.params.id;

  let recipes = state.specialsList.specials
    .map(specialId => state.recipeList.recipes[specialId])
    .filter(Boolean)
    .map(recipe => ({
      id: recipe.idMeal,
      name: recipe.strMeal
    }));

  return {
    errorMessage: state.recipeList.errorMessage,
    isFetching: state.recipeList.isFetching,
    recipeId,
    recipes,
    recipesLength: state.recipeList.recipes.length,
    specialsDate: state.specialsList.date
  };
}

export default withRouter(connect(
  mapStateToProps,
  {
    fetchRecipes,
    setSpecials
  },
)(RecipeListContainer));


