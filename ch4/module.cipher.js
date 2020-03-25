let crypto  =require('crypto');

let key = 'min'; // 암호화에 사용되는 키 값
let input = 'PASSWORD';

//  createCipher is deprecated
let cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
let cipheredOutput = cipher.final('base64');

// 암호화 해제
let decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput,'base64', 'utf8');
let decipheredOutput = decipher.final('utf8');

console.log(cipher);
// output
console.log('원래 문자열 : '+ input);
console.log('암호화 : '+cipheredOutput);
console.log('암호화 해제 : '+decipheredOutput);