const express =require('express');
const app = express();
const port = 52273;

let routerA = express.Router();
let routerB = express.Router();

routerA.get('/index', function (request, response) {
    response.send('<h1>Index Page 1</h1>');
})

routerB.get('/index', function( request, response){
    response.send('<h1>Index Page 2</h1>');
})

app.use('/a',routerA);
app.use('/b',routerB);

app.listen(port, () => {console.log("Server Runiing At http://127.0.0.1:52273")});

