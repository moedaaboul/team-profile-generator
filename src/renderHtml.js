const { openingString, closingString } = require('./html');

const renderHtml = (cards) => {
  return `${openingString}
  ${cards}
  ${closingString}`;
};

module.exports = renderHtml;
