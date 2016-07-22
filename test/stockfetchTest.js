const assert = require('assert');
const mocha = require('mocha');

describe('stockfetch', function () {
    it('happypath', function () {
        const getTickersFromFile = function (file) {
            assert.equal(file, './symbolsFile');
            return Promise.resolve(['A', 'B', 'C']);
        };

        const getTickerPricesFromYahoo = function (tickers) {
            assert.deepEqual(tickers, ['A', 'B', 'C']);
            return Promise.resolve([10, 20, 30]);
        };

        const printReport = function(prices) {
            assert.deepEqual(prices, [10, 20, 30]);
        };

        const stockfetch = require('../lib/stockfetch')({getTickersFromFile, getTickerPricesFromYahoo, printReport});

        return stockfetch('./symbolsFile');
    });

    it('get tickers from file is failing', function(done) {
        const getTickersFromFile = function(file) {
            return Promise.reject('error');
        };

        const handleError = function(error) {
            assert.equal(error, 'error');
        };

        const fetch = require('../lib/stockfetch')({getTickersFromFile, handleError});

        fetch('some_file').then(() => done()).catch(done);
    });

});