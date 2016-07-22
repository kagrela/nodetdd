const assert = require('assert');
const mocha = require('mocha');
const readFile = require('../lib/readfile');

describe('readFile', function () {
    it('should extract tickers from file', function () {
        readFile('./somefile').then(function(fileContent) {
            assert.equal('a\nb\n', fileContent);
        });
    });
});
