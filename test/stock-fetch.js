const assert = require('assert');
const sinon = require('sinon');
const StockFetch = require('../stock-fetch');

describe('stockfetch', function () {
    it('happypath', function () {
        const printReportMock = sinon.stub();
        new StockFetch(printReportMock).fetch('./fixtures/in/symbols');
        assert(printReportMock.calledWith({
            'GOOG': 698.200012,
            'AAPL': 96.50,
            'MSFT': 51.610001,
            'ORCL': 40.830002
        }));
    });
});
