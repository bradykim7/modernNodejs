const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function (request, response){
    // ejs file must be read utf8 format
    fs.readFile('ejsPage.ejs', 'utf8', function(error, data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(ejs.render(data));
    });
}).listen(52273, () => {console.log('Server Runnging at http://127.0.0.1:52273')});
