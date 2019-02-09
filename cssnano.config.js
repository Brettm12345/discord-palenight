const advancedPreset = require('cssnano-preset-advanced');

module.exports = advancedPreset({
  autoprefixer: {
    add: true
  },
  discardComments: {
    remove: comment => comment[0] === "@"
  }
});
