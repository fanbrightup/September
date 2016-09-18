var url = require('url');
var querystring = require('querystring');

var str = 'http://localhost:8888/start?foo=bar&hello=world';
var strquery = url.parse(str).query;
// console.log(url.parse(str));
// console.log(strquery);
// console.log(querystring.parse(strquery)['hello']);
console.log(url.parse(str).query);
console.log(querystring.parse(strquery)['foo']);
// console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'))
