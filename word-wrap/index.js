'use strict';

class Wrapper {

  static create() {
    return new Wrapper();
  }

  wrap(text, length) {
    if (text.length > length) {
      const words = text.split(' ');
      return this._getLines(words).join('\n');
    }

    return text;
  }

  _getLines(words) {
    const lines = [];

    let currentLine = '';
    for (const word of words) {
      currentLine += word;
      lines.push(word);
      currentLine = '';
    }

    return lines;
  }

}

module.exports = Wrapper;
