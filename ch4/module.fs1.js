let fs = require('fs');

let data = 'Hello World';

fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function(err){
    console.log('Write File Async Complete');
})

fs.writeFileSync('TextFileOtherWirteSync.txt', data, 'utf8');
console.log('Write File Sync Complete');