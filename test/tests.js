var test = require('tape');
var Singleton = require('../singleton');

test('Singleton returns same object', function(t){
	t.plan(1);
	function moduleConstructor(opts){
		var self = {};
		var opts = opts || {};
		self.name = "I am module";
		return self;
	}
	var Module = Singleton(moduleConstructor); 
	var mod1 = Module.getInstance();
	var mod2 = Module.getInstance();
	t.equal(mod1, mod2);
});

test('Singleton only used first called params', function(t){
	t.plan(1);
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
	t.equal(mod1.opts, mod2.opts);
});
