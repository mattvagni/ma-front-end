const { config } = require('../../config');

if (config.isDev) {
  require('babel-register')({
    babelrc: false,
    presets: [
      'es2015',
      'stage-1',
      'react'
    ],
    plugins: [
      'system-import-transformer'
    ]
  });

  require.extensions['.css'] = () => {
    return;
  };

  require('./server.dev');
} else {
  require('./server.prod');
}
