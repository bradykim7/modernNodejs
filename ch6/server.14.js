const http = require('http');

http.createServer(function (request, response){

    let date = new Date();
    date.setDate(date.getDate()+1);

    // Checking Cookies exist
    if(request.headers.cookie){
        let cookie = request.headers.cookie.split(';').map(function (element){
            let elements = element.split('=');
            return {
                key : elements[0],
                value : elements[1]
            };
        });
        // Response
        response.end('<h1>'+JSON.stringify(cookie)+'</h1>')
    }
    // Creating Cookies
    else {
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'Set-Cookie' : [
                'name = kms; Expires = '+ date.toUTCString(),
                'region = Seoul'
            ]
        })

        //response
        response.end('<h1>쿠키를 생성했따</h1>')

    }
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273')
})