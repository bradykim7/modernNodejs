const express = require('express');

const app = express();

// send
// string => html
// array => json
// object {} => json

app.use(function(request, response){
    let output = [];
    for (let i =0;i<3;i++){
        output.push(
            {count :i, name: 'name - '+i}
        );
    }
    response.status(404).send("<h1>Page Not Found</h1>")
    response.send(output);
})

app.listen(52273, ()=>{console.log("Server Running at http://127.0.0.1:52273")})