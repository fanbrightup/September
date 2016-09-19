var util = require('util');
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
	console.log('Hello ' + this.name);
	};
}
Base.prototype.showName = function() {
	console.log(this.name);
};
Base.prototype.showNames = function() {
	console.log(this.name);
};
Base.prototype.base = new Base().base;
Base.prototype.baseName = function() {
	console.log(this.base);
};
function Sub() {
	this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.baseName();
//objSub.sayHello();
console.log(objSub);
