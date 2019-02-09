const path = require('path');
const globImporter = require('node-sass-glob-importer');

const META = `/*//META{"name":"Palenight","description":"A theme for Discord loosely based on Google's Material Design Guidelines.","author":"Brett Mandler","version":"1.0.0"}*//**/

`;

module.exports = [
  {
    entry: ['./src/index.scss'],
    mode: 'production',
    performance: {
      hints: false
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                path: path.resolve(__dirname, 'dist'),
                name: 'Palenight.theme.css'
              }
            },
            {
              loader: 'text-transform-loader',
              options: {
                prependText: META
              }
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            {
              loader: 'sass-loader',
              options: {
                importer: globImporter(),
                includePaths: ['./node_modules'],
                outputStyle: 'compressed'
              }
            },
          ]
        }
      ]
    }
  }
];
