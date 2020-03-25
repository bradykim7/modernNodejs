const express = require('express');
const routerA = require('./routerA');

const app = express();
app.use('/a',routerA.router);

app.listen(52273, () => {console.log("Server Running at http://127.0.0.1:52273")});