module.exports = function({getTickersFromFile, getTickerPricesFromYahoo}) {
    return function (fileName) {
        return getTickersFromFile(fileName).then(getTickerPricesFromYahoo)
    };
};