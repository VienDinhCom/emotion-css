const { css } = require('emotion');

module.exports = rules =>
  typeof rules === 'string'
    ? css`&&& { ${[rules]} }`
    : css({ '&&&': rules });
