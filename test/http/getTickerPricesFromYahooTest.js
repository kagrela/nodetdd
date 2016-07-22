const assert = require('assert');
const getTickerPrices = require('../../lib/http/getTickerPricesFromYahoo');
const coMocha = require('co-mocha');

describe('getTickerPrices', function () {
    it('should return prices for tickers', function *() {

        const fetchPrices = function(prices) {
            assert.deepEqual(prices, ['A', 'B']);

            return Promise.resolve(['responseA', 'responseB']);
        };

        const processPrices = function(responses) {
            assert.deepEqual(responses, ['responseA', 'responseB']);
            return [10, 20];
        };

        const result = yield getTickerPrices({fetchPrices, processPrices})(['A', 'B']);

        assert.deepEqual(result, [['A', 10], ['B', 20]]);
    });
});