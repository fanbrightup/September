var express = require('express');
var foo = require('./foo');
var router = express.Router();
// var credentials = require('../lib/credentials.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // let file_data = toUSD(100);
  // console.log(foo());
  // res.cookie('mycookie','mycookie_value');
  res.cookie('signedname','fan',{signed:false});
  if(req.cookies.signedname == 'fan'){
    res.send('登陆成功');
  }else{
    res.send('权限不足');
  }
  // res.clearCookie('mycookie');
  // var s = foo.sayHello();
  // var mycookie_value = req.cookies.mycookie;

  res.send(mycookie_value);
  // res.render('index', { title: 'fanbright',file:fild_data });
});
router.get('/:city/:myname',(req,res,next)=>{
  var staff = {
    city:{
      beijing:{bio:'北京的'},
      shanghai:{bio:'上海的'},
    },
    myname:{
      fan:{bio:'fan1'},
      fanfan:{bio:'fan2'},
    },
  };

  // var info = staff[req.params.city][req.params.name];
  // if(!info) return next();
  // res.render('staffer',{title:req.params.name,file:info});
  // res.send('cityname:'+staff[req.params.city][req.params.myname]);

 // 使用try catch达到初步目标
  try{
  var info = staff.city[req.params.city].bio+staff.myname[req.params.myname].bio;
}catch(e){
  // res.send(e.message+'\n'+'没有这个员工');
  // res.redirect('/beijing/fan');
  return next();
}
  res.send(info);

  // var info = staff.city[req.params.city].bio+staff.myname[req.params.myname].bio;
      // if(!info) return next();
    // res.send(info);
})
module.exports = router;
