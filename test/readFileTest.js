const assert = require('assert');
const mocha = require('mocha');
const readFile = require('../lib/readFile');
const path = require('path');
require('co-mocha');

describe('read file', function () {
    it('[integration test] should read content of a file', function *() {
        const fs = require('fs');
        const read = readFile(fs);

        const result = yield read(path.join(__dirname, 'symbols'));

        assert.equal(typeof result, 'string');
        assert.equal(result, 'GOOG\nAAPL\nORCL\nMSFT');
    });

    it('[unit test] should read content of a file', function *() {
        const fs = {
            readFile: function (file, encoding, cb) {
                assert.equal(file, 'file');
                assert.equal(encoding, 'UTF-8');
                cb(null, 'content');
            }
        };
        const read = readFile(fs);

        const result = yield read('file');

        assert.equal(typeof result, 'string');
        assert.equal(result, 'content');
    });

    it('[integration test] should fail on nonexistent file', function *() {
        const fs = require('fs');
        const read = readFile(fs);

        try {
            yield read(__dirname + '/symbols_nonexistant');
            throw 'should not get here';
        } catch (e) {
            assert.equal(e, 'Cannot read file ' + __dirname + '/symbols_nonexistant');
        }
    });

    it('[unit test] should fail on nonexistent file', function *() {
        const fs = {
            readFile: function (file, encoding, cb) {
                assert.equal(file, 'file');
                return cb('error');
            }
        };
        const read = readFile(fs);

        try {
            yield read('file');
            throw 'should not get here';
        } catch (e) {
            assert.equal(e, 'Cannot read file file');
        }
    });

});