const http = require('http');

http.createServer(function (request, response){
		response.writeHead(302, { 'Location':'https://www.naver.com' });
		response.end();
		}).listen(52273, function(){
			console.log('Server Running at http://127.0.0.1:52273');
			});


/*
   HTTP STATUS CODE 
   100 ~ | 처리중        | ex) 100 Continue
   200 ~ | 성공          | ex) 200 OK
   300 ~ |리다이렉트     | ex) 300 Multiple choices
   400 ~ |클라이언트 오류| ex) 400 Bad Request , 404 Page Not Found
   500 ~ |서버 오류      | ex) 500 Internal Server Error

   */
