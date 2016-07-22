const assert = require('assert');
const mocha = require('mocha');

describe('gettickersfromfile', function () {
    it('should get tickers', function () {
        const readFile = function (file) {
            assert.equal(file, './symbols');
            return Promise.resolve('file content');
        }

        const extractTickers = function (content) {
            assert.equal(content, 'file content');
            return ['A', 'B', 'C'];
        }

        const gettickersfromfile = require('../lib/gettickersfromfile')({readFile, extractTickers});

        return gettickersfromfile('./symbols')
    });
});