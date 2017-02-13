const path = require('path');
const ip = require('ip');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';
const isDev = !isProd;

const paths = {
  base: '/',
  config: 'config',
  internal: 'internal',
  buildDir: 'build',
  clientDir: 'src/client',
  serverDir: 'src/server',
  sharedDir: 'src/shared',
  clientEntry: 'src/client/index.js',
  serverEntry: 'src/server/server.prod.js'
};

paths.get = (key) => path.join(process.cwd(), paths[key]);

const config = {
  env,
  isProd,
  isDev,
  hostname: ip.address() || 'localhost',
  port: process.env.PORT || 5000,
  bundles: {
    client: {
      srcEntryFile: paths.get('clientEntry'),
      srcIncludePaths: [
        paths.get('clientDir'),
        paths.get('sharedDir')
      ],
      webPath: '/',
      outputPath: paths.get('buildDir')
    },
    server: {
      srcEntryFile: paths.get('serverEntry'),
      srcIncludePaths: [
        paths.get('serverDir'),
        paths.get('sharedDir')
      ],
      outputPath: paths.get('buildDir')
    }
  }
};

module.exports = { paths, config };
