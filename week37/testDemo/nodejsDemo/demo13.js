var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./input.txt.zip')
        .pipe(zlib.createGunzip())
        .pipe(fs.createWriteStream('./input.txt'));

console.log('压缩完成');
