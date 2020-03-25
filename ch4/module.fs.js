let fs = require('fs');

let text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

fs.readFile('textfile.txt', 'utf8', function (err, data){
    console.log(data);
});

