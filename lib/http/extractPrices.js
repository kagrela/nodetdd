module.exports = function(responses) {
    return responses.map(process);
};

function process(response) {
    if(response.statusCode !== 200) {
        return 'Error: ' + response.statusCode;
    }

    const body = response.body;
    const firstDataLine = body.split('\n')[1];
    const price = firstDataLine.split(',')[1];
    return price;
};