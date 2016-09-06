var express = require('express');
var foo = require('./foo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // let file_data = toUSD(100);
  // console.log(foo());
  var s = foo.sayHello();
  res.send('这是');
  // res.render('index', { title: 'fanbright',file:fild_data });
});

module.exports = router;
