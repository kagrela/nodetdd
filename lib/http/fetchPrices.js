module.exports = function ({request}) {
    function requests(tickers) {
        return tickers.map(neverFailingRequest);
    }

    function neverFailingRequest(ticker) {
        return request('http://ichart.finance.yahoo.com/table.csv?s=' + ticker).catch(function (error) {
            return {statusCode: 404};
        })
    }

    return function (tickers) {
        return Promise.all(requests(tickers));
    }
};

