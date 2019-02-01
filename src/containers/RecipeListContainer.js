import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../components/layout/Layout';
import { getJsonSchema } from './../modules/schemaModule';
import { checkAuth } from './../modules/authModule';
import SignInContainer from './forms/SignInContainer';

class RecipesContainer extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return <Recipes />;
  }
}

RecipesContainer.propTypes = {
  getJsonSchema: PropTypes.func,
  fetchAllTrainersAction: PropTypes.func,
  fetchAllClientsAction: PropTypes.func,
  checkAuth: PropTypes.func,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

function mapStateToProps(state = []) {
  return {
    isReady: Object.keys(state.schema.definitions).length > 0,
    isAuthenticated: state.auth.isAuthenticated,
    userName: state.auth.user.userName,
  };
}

export default connect(
  mapStateToProps,
  {
    getJsonSchema,
    checkAuth,
  },
)(RecipesContainer);


