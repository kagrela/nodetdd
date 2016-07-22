const assert = require('assert');
const extractPrices = require('../../lib/http/extractPrices');

describe('extract prices', function () {

    it('should translate responses to current prices', function () {
        var data = 'Date,Open,High,Low,Close,Volume,Adj Close\n\ ' +
            '2015-09-11,619.75,625.780029,617.419983,625.77002,1360900,625.77002\n\ ' +
            '2015-09-10,613.099976,624.159973,611.429993,621.349976,1900500,621.349976';

        var response = {
            statusCode: 200,
            body: data
        };

        const prices = extractPrices([response]);

        assert.deepEqual(prices, ['619.75']);
    });

    it('should handle error response', function () {
        var response = {
            statusCode: 404
        };

        const prices = extractPrices([response]);

        assert.deepEqual(prices, ['Error: 404']);
    });

});