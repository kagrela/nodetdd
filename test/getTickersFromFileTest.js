const assert = require('assert');
const mocha = require('mocha');

describe('getTickersFromFile', function () {
    it('should extract tickers from file', function () {
        const readFile = function(fileName) {};
        const extractTickers = function(fileContent) {};

        const getTickersFromFile = require('../lib/getTickersFromFile')({readFile, extractTickers});

        return getTickersFromFile('./symbolsFile');
    });

});