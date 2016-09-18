var events = require('events');
var emitter = new events.EventEmitter();
emitter.emit('error');
emitter.on('error',(err)=>{
  console.log(err);
});
