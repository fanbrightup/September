//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
console.log('begin >>>>>>>>>>>>>>')
emitter.on('newListener',()=>{
  console.log('nnnnnnew new')
})
events.EventEmitter.removeAllListener('someEvent');
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
  return ;
});
emitter.on('someEvent', function(arg1, arg2) {
	console.log('listener2', arg1.name, arg2);
});
emitter.emit('someEvent', {'name':'fan'}, 'arg2 参数');
emitter.emit('someEvent', {'name':'fan'}, 'arg2 参数');
console.log(emitter.listeners('someEvent').length);
console.log(events.EventEmitter.listenerCount(emitter,'someEvent'));
