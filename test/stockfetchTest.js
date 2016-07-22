const assert = require('assert');
const mocha = require('mocha');

describe('stockfetch', function () {
    it('happypath', function () {
        const getTickersFromFile = function(file) {
            assert.equal(file, './symbolsFile');
        };

        const stockfetch = require('../lib/stockfetch')({getTickersFromFile});

        stockfetch('./symbolsFile');
    });

});