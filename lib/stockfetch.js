module.exports = function({getTickersFromFile}) {
    return function (fileName) {
        getTickersFromFile(fileName)
    };
};