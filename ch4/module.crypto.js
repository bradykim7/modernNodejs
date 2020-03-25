let crypto = require('crypto');

let shasum =  crypto.createHash('sha256'); // creating the hash
                                            // hash noramlly means in javascript key and value

shasum.update('crypto_hash');
let output = shasum.digest('hex');

console.log(output);

/*
let output1 = shasum.digest('Int8Array');
let output2 = shasum.digest('Int16Array');
let output3 = shasum.digest('Int32Array');
let output4 = shasum.digest('Uint8Array');
let output5 = shasum.digest('Uint16Array');
let output6 = shasum.digest('Uint32Array');
let output7 = shasum.digest('Uint8ClampedArray');
let output8 = shasum.digest('Float32Array');
let output9 = shasum.digest('Float64Array');
let output10 = shasum.digest('DataView');
let output11 = shasum.digest('ArrrayBuffer');
*/

