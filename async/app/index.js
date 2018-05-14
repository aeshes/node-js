const fs = require('fs');

console.log('start reading the file');

fs.readFile('./data/file', 'utf-8', function(err, content) {
    if (err) {
        console.log('error happened while reading');
        return console.log(err);
    }

    console.log(content);
});

console.log('end of the file');