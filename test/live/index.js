var Singleton = require('../../singleton');

function moduleConstructor(opts){
	var self = {};
	var opts = opts || {};
	self.name = "I am module";
	self.opts = opts;
	return self;
}
var Module = Singleton(moduleConstructor); 
var mod1 = Module.getInstance({type: "Sexy module"});
var mod2 = Module.getInstance({type: "Boring module"});
console.log(mod1.opts, mod2.opts);