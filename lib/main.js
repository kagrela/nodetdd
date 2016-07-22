const readFile = require('./file/readFile')(require('fs'));
const extractTickers = require('./file/extractTickers');
const getTickersFromFile = require('./file/getTickersFromFile')({readFile, extractTickers});

var request = require('good-guy-http')();
const fetchPrices = require('./http/fetchPrices')({request});
const extractPrices = require('./http/extractPrices');
const getTickerPricesFromYahoo = require('./http/getTickerPricesFromYahoo')({fetchPrices, extractPrices});

const printReport = console.log;

const stockfetch = require('./stockfetch')({getTickersFromFile, getTickerPricesFromYahoo, printReport});

stockfetch('./symbols').catch(console.log);