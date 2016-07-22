module.exports = function(fs) {
  return function (filename) {
    return new Promise(function (resolve, reject) {
      fs.readFile(filename, 'utf8', function (err, data) {
        if (err) reject('Cannot read file ' + filename);
        else resolve(data);
      });
    });
  }
};