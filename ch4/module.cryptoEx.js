let crypto = require('crypto');

let key = "My Seceret Key";
let input = "PASSWORD";

let cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
let cipheredOutput = cipher.final('base64');

let decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
let decipheredOutput = decipher.final('utf8');

console.log("Original Text: " + input);
console.log("Ciphered Text: " + cipheredOutput);
console.log("Deciphered Text: "+ decipheredOutput);
