const express = require('express');
const router= express.Router();

router.get('/index', function(request, response){
    response.send('<h1>Index Pages 1 </h1>')
})

exports.router = router;