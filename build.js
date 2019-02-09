const webpack = require('webpack');
const fs = require('fs-extra');
const config = require('./webpack.config');
const path = require('path');

const compiler = webpack(config);

const argv = process.argv.slice(2);
const watch = argv.indexOf('--watch') !== -1;

const cleanup = () => {
  fs.removeSync(path.resolve(__dirname, 'dist'));
};

const copyFile = () => {
  fs.copySync(
    path.resolve(__dirname, 'dist', 'Palenight.theme.css'),
    path.resolve(
      process.env.XDG_CONFIG_HOME,
      'BetterDiscord',
      'themes',
      'Palenight.theme.css'
    ),
    { dereference: true }
  );
};

const processFiles = (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      stats.toString({
        chunks: false,
        colors: true
      })
    );
    copyFile();
    cleanup();
  }
};

if (watch) {
  compiler.watch({}, processFiles);
} else {
  compiler.run(processFiles);
}
