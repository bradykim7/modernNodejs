const http = require('http');
const fs = require('fs');
const pug = require('pug');


http.createServer(function(request, response){
    // Read Jade / Pug files
    fs.readFile('PugPage.pug', 'utf8', function(error, data){
        let fn = pug.compile(data);

        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(fn({
            name:'KMS',
            description:'Hello Jade With NodeJS'
        }));

    });
}).listen(52273, () => {console.log("Server Runnig at httpt://127.0.0.1:52273")});