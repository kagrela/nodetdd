const zip = require('lodash.zip');

module.exports = function({fetchPrices, processPrices}) {
    return function(tickers) {
        return fetchPrices(tickers).then(processPrices).then(function(prices) {
            return zip(tickers, prices);
        });
    }
};