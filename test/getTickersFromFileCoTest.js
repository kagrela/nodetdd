const assert = require('assert');
const mocha = require('mocha');
require('co-mocha');

describe('getTickersFromFile', function () {
    it('should extract tickers from file', function *() {
        const readFile = function(fileName) {
            assert.equal(fileName, 'someFile');
            return Promise.resolve('file content');
        };
        const extractTickers = function(fileContent) {
            assert.equal(fileContent, 'file content');
            return ['A', 'B', 'C'];
        };

        const getTickersFromFile = require('../lib/getTickersFromFile')({readFile, extractTickers});

        const tickers = yield getTickersFromFile('someFile');
        assert.deepEqual(tickers, ['A', 'B', 'C']);
    });

});