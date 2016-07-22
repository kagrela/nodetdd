module.exports = function({getTickersFromFile, getTickerPricesFromYahoo, printReport, handleError}) {
    return function (fileName) {
        return getTickersFromFile(fileName).then(getTickerPricesFromYahoo).then(printReport).catch(handleError);
    };
};