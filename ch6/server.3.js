let http = require('http');

let server = http.createServer();

server.on('request', function(code){
		console.log('Request ON');

	});

server.on('connection', function(code){
		console.log('Connection ON');
		});

server.on('close', function(code){
		console.log('Close ON');
		});

server.listen(52273);
