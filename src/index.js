import App from './components/App';
import configureStore from './redux/configureStore';
import React from 'react';
import ReactDOM from 'react-dom';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root'),
);
