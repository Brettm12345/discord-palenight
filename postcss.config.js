module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('cssnano'),
    require('postcss-will-change-transition'),
    require('postcss-flexbugs-fixes'),
    require('postcss-merge-longhand'),
    require('postcss-font-magician'),
    require('postcss-easing-gradients')
  ]
};
