const assert = require('assert');
const mocha = require('mocha');

describe('gettickersfromfile', function () {
    it('should get tickers', function () {
        const readFile = function (file) {
            assert.equal(file, './symbols');
            return Promise.resolve('A\nB\nC\n');
        }

        const extractTickers = function () {
            return Promise.resolve(['A', 'B', 'C']);
        }

        const gettickersfromfile = require('../lib/gettickersfromfile')({readFile, extractTickers});

        return gettickersfromfile('./symbols')
    });
});