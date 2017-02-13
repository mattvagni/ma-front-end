import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import initialState from './initialState';

export default (initialState = initialState) =>
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension() : f => f
    )
  );
