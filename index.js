const { css } = require('emotion');

module.exports = rules =>
  Array.isArray(rules)
    ? css`&&&& { ${rules[0]} }`
    : css({ '&&&&': rules });
