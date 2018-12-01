const emotion = requrie('emotion');

function css(rules) {
  return emotion.css({
    '&&&': rules,
  });
}

module.exports = { css };