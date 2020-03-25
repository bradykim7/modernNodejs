const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

http.createServer(function(request, response){
    fs.readFile('ejsPage.2.ejs', 'utf8', function(error, data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.end(ejs.render(data, {
            name:'KMS',
            description:'Hellow EJS with nodejs'
        }));
    })
}).listen(52273, () => {console.log("Server Running At http:127.0.0.1:52273")})