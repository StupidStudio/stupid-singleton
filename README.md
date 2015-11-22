# Stupid Singleton
Simple singleton creater for js (browserify).

## Usage

Creating a singleton:

```javascript
var Singleton = require('stupid-singleton');

function moduleConstructor(opts){
	var self = {};
	var opts = opts || {};
	self.name = "I am module";
	return self;
}
var Module = Singleton(moduleConstructor); 
var mod1 = Module.getInstance(); // returns an instance of moduleConstructor
var mod2 = Module.getInstance(); // return the same instance
console.log(mod1 === mod2); // true
```