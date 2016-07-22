const fs = require('fs');
const request = require('good-guy-http')();

// read a file
fs.readFile('./symbols', function(err, data) {
    // extract tickers
    const tickers = data.toString().split('\n');

    // fetch price
    const requests = tickers.map(t => request('http://ichart.finance.yahoo.com/table.csv?s=' + t));

    Promise.all(requests).then(function (results) {
        // process price
        let values = results.map(r => r.body.toString().split('\n')[1].split(',')[1]);
        // print report
        console.log(values);
    }).catch(console.log); // handle error
});