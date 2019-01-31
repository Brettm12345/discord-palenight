module.exports = {
  extends: ["stylelint-config-recommended-scss", "stylelint-config-prettier"],
  plugins: ["stylelint-order"],
  rules: {
    "string-quotes": "double",
    "comment-whitespace-inside": null,
    "color-hex-length": "long",
    "font-family-name-quotes": null,
    "selector-no-qualifying-type": null,
    "value-list-comma-newline-after": null,
    "max-nesting-depth": 2
  }
};
