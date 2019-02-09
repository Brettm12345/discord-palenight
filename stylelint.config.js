module.exports = {
  "extends": ["stylelint-config-sass-guidelines", "stylelint-prettier/recommended"],
  "plugins": ["stylelint-order", "stylelint-scss"],
  "rules": {
    "max-nesting-depth": 2,
    "prettier/prettier": [true, {"singleQuote": true, "tabWidth": 2}],
    "property-no-vendor-prefix": true,
    "selector-class-pattern": null,
    "selector-max-id": 3,
    "selector-max-compound-selectors": 12,
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": null,
    "value-no-vendor-prefix": true
  }
}
