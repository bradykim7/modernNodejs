const express = require('express');
const morgan = require('morgan');

const app = express();
const port =52273;

// showing all of the logs with combined
app.use(morgan('combined'));


app.use(morgan(':req[header]'));
app.use(morgan(':res[header]'));
app.use(morgan(':http-version'));
app.use(morgan(':response-time'));
app.use(morgan(':remote-addr'));
app.use(morgan(':date'));
app.use(morgan(':method'));
app.use(morgan(':url'));
app.use(morgan(':referrer'));
app.use(morgan(':user-agent'));
app.use(morgan(':status'));


app.use(function(request, response){
    response.send('<h1>express Basic</h1>')
});

app.listen(port, () => {console.log("Server Running at http://127.0.0.1:52273")})
