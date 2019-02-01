import './RecipeList.css';
import Modal from './Modal';
import PropTypes from 'prop-types';
import React from 'react';
import selectn from 'selectn';

class RecipeList extends React.Component {
  state = { showModal: false };

  static getDerivedStateFromProps(props) {
    return {
      showModal: props.recipeId != null
    }
  }

  toggleModal = (id) => {
    if (this.state.showModal === true) {
      this.props.history.push('/recipes');
    } else if (id != null) {
      this.props.history.push(`/recipes/${id}`);
    }
  };

  render() {
    return (
      <div className="RecipeList">
        <div className="RecipeList-title">
          Todays Specials!
        </div>
        { this.props.recipes.map(recipe =>
          (<div onClick={() => this.toggleModal(recipe.id)} key={ recipe.id }>
            <div className="RecipeList-item">
              { recipe.name }
            </div>
          </div>)
        )}
        { this.state.showModal === true ?
          (<Modal handleClose={ this.toggleModal } recipeId={ selectn('props.match.params.id', this) } />)
          : null
        }
      </div>
    );
  }
}

RecipeList.propTypes = {
  errorMessage: PropTypes.string,
  fetchRecipes: PropTypes.func,
  isFetching: PropTypes.bool,
  recipeId: PropTypes.string,
  recipes: PropTypes.array,
};

export default RecipeList;
