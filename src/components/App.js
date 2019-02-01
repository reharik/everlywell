import PropTypes from 'prop-types';
import React from 'react';
import RecipeListContainer from "./../containers/RecipeListContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

const App = ({ store }) => (
  <Provider store={store}>
      <div style={{ height: '100%', position:'relative' }}>
        <Router>
          <Route path="/recipes/:id?" component={RecipeListContainer} />
        </Router>
      </div>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
