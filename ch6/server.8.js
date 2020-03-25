import fs from 'fs';
import http from 'http';

const server1 = http.createServer(function (request, response){
		fs.readFile('henry.jpeg', (error, data) => {
				response.writeHead(200, {'Content-Type':'image/jpeg' });
				response.end(data);
				});
		});
const server2 = http.createServer(function (request, response){
		fs.readFile('ShapeofYou.mp3', function(error, data){
				response.writeHead(200, {'Content-Type':'audio/mp3'});
				response.end(data);
				});
		});

server1.listen(52273, () => {console.log('Server Running at http://127.0.0.1:52273')} );

server2.listen(52274, () => {console.log('Server Running at http://127.0.0.1:52274')} );


