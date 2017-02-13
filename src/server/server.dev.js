import Koa from 'koa';
import convert from 'koa-convert';
import compress from 'koa-compress';
import serve from 'koa-static';
import path from 'path';
import webpack from 'webpack';
import reactMiddleware from './react-ssr';
import { config, paths } from '../../config';

const app = new Koa();

console.log('✓ Enable webpack dev middleware.');
const webpackConfig = require('../../webpack/client.config');
const compiler = webpack(webpackConfig);
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');

app.use(convert(webpackDevMiddleware(compiler, {
  historyApiFallback: true,
  hot: true,
  quiet: true
})));

app.use(convert(webpackHotMiddleware(compiler)));
app.use(convert(serve(paths.get('buildDir'))));
app.use(reactMiddleware);

app.listen(config.port, () => {
  console.log(`» App running in dev mode at http://${config.hostname}:${config.port}.`);
});
