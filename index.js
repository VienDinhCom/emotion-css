const emotion = require('emotion');

function css(rules) {
  return typeof rules === 'string'
    ? emotion.css`&&& { ${rules} }`
    : emotion.css({ '&&&': rules });
}

module.exports = { css };
