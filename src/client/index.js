import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../shared/state/store';
import App from '../shared/containers/App';

// Grab the initial store state from the window
const initialState = window.__INITIAL_STATE__;
// Create a new redux store
const store = configureStore(initialState);

// The element to render the client side app into
const container = document.getElementById('app');

// Render the client side app
const renderApp = (store, AppComponent) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    container
  );
};

if (module.hot) {
  module.hot.accept('../shared/containers/App', () => {
    const NextApp = require('../shared/containers/App').default;
    renderApp(store, NextApp);
  });
}

renderApp(store, App);
