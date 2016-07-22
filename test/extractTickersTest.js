const assert = require('assert');
const mocha = require('mocha');

describe('extractTickers', function () {
    it('should convert string to array', function () {
        const extractTickers = function(fileContent) {
            assert.equal(fileContent, 'file content');
            return ['A', 'B', 'C'];
        };

        const getTickersFromFile = require('../lib/getTickersFromFile')({readFile, extractTickers});

        return getTickersFromFile('someFile').then(function(tickers) {
            assert.deepEqual(tickers, ['A', 'B', 'C']);
        });
    });

});