import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../../shared/containers/App';
import { config } from '../../../config';

const assets = require('../../../build/assets.json');

const isDev = process.env.NODE_ENV !== 'production';

// The HTML to be rendered
const HTML = ({ head, assets, content, initialState }) => `
  <html lang='en-GB'>
    <head>
      <meta charSet='utf-8' />
      <meta content='width=device-width, initial-scale=1' name='viewport' />
      ${head ? head.title.toString() : ''}
      ${head ? head.meta.toString() : ''}
      ${head ? head.link.toString() : ''}
      ${!config.isDev ? `<link href="${assets.main.css}" rel='stylesheet' />` : ''}
    </head>
    <body>
      <div id='app'>${content}</div>
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
      <script src="${config.isDev ? '/main.js' : assets.main.js}"></script>
      ${head ? head.script.toString() : ''}
    </body>
  </html>`;

// Takes the URL and the default store, and returns an object containing the HTML to be rendered,
// along with a context containing any redirects
export default ({ location, store }) => {
  const head = Helmet.rewind();

  const context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const initialState = store.getState();

  return {
    context,
    html: HTML({ head, assets, content, initialState})
  };
};
