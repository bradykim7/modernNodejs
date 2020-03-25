let server = require('http').createServer(function (request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1>Hellow Web Server With Nodejs</h1>');
		}).listen(52273,function (){ 
			console.log('Server Running at http://127.0.0.1:52273');
			});

