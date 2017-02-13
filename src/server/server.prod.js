import Koa from 'koa';
import convert from 'koa-convert';
import helmet from 'koa-helmet';
import compress from 'koa-compress';
import serve from 'koa-static';
import path from 'path';
import webpack from 'webpack';
import reactMiddleware from './react-ssr';
import { config, paths } from '../../config';

const app = new Koa();

// app.use(helmet());
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     defaultSrc: ["'self'"],
//     imgSrc: ['data:'],
//   }
// }));

app.use(compress());
app.use(convert(serve(paths.get('buildDir'))));
app.use(reactMiddleware);

app.listen(config.port, () => {
  console.log(`» App running in production mode at http://${config.hostname}:${config.port}.`);
});
