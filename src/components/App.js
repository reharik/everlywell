import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import routes from '../routes';
import DevTools from './DevTools';
import { Router } from 'react-router';
import './App.css';

const Root = ({ store, history }) => (
  <Provider store={store}>
      <div style={{ height: '100%' }}>
        <Router history={history} routes={routes} />
        <DevTools />
      </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
