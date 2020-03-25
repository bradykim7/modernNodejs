let url = require('url');
let querystring = require('querystring');

let parsedObject = url.parse('https://www.youtube.com/watch?v=cJM-owJIJW8')

console.log(parsedObject);
console.log(querystring.parse(parsedObject.query));

