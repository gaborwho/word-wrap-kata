'use strict';

const Wrapper = require('.');
const expect = require('chai').expect;

describe('Wrapper', function() {

  describe('#wrap', function() {

    context('text is shorter than wrap length', function() {

      it('returns the original text', function() {
        expect(Wrapper.create().wrap('original text', 100))
          .to.equal('original text');
      });

    });

    context('the second word of two does not fit on the same line', function() {

      it('returns every word in a new line', function() {
        expect(Wrapper.create().wrap('original text', 10))
          .to.equal('original\ntext');
      });

    });

    context('three words dont fit on the same line', function() {

      it('returns every word in a new line', function() {
        expect(Wrapper.create().wrap('text and some', 5))
          .to.equal('text\nand\nsome');
      });

    });

    context('the third word fits on the second line', function() {

      it('returns two words on the second line', function() {
        expect(Wrapper.create().wrap('original text some', 10))
          .to.equal('original\ntext some');
      });

    });

  });

});
