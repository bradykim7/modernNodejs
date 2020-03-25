const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 52273;

// combined short common dev tiny
app.use(morgan('short'));
app.use(function(request, response){
    response.send('<h1>Sevrer Ing ~! </h1>');
});

app.listen(port, () => { console.log("Server Running At http://127.0.0.1:52273")});
