const assert = require('assert');
const fetchPrices = require('../../lib/http/fetchPrices');

describe('fetch prices', function () {
    xit('[integration test] should fetch a symbol', function *() {
        const request = require('good-guy-http')();
        const fetch = fetchPrices({request});

        const results = yield fetch(['AAPL', 'GOOG', 'INVALID']);

        assert.equal(results[0].statusCode, 200);
        assert.equal(results[1].statusCode, 200);
        assert.equal(results[2].statusCode, 404);
        assert.equal(results.length, 3);
    });

    it('[unit test] should fetch a symbol', function *() {
        const request = function (url) {
            return url.endsWith('INVALID') ? Promise.reject({statusCode: 404}) : Promise.resolve({statusCode: 200});
        };
        const fetch = fetchPrices({request});

        const results = yield fetch(['AAPL', 'GOOG', 'INVALID']);

        assert.equal(results[0].statusCode, 200);
        assert.equal(results[1].statusCode, 200);
        assert.equal(results[2].statusCode, 404);
        assert.equal(results.length, 3);
    });

});