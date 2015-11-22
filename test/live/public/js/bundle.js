(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * @fileoverview JS Singleton constructor
 * @author david@stupid-studio.com (David Adalberth Andersen)
 */

 /**
 * Singleton
 * @constructor
 * @param {function} moduleConstructor Passes the moduleConstructor
 */
function Singleton(moduleConstructor){
    /**
     * Returns a self-execution function that returns an object
     * @example var Module = Singleton(ModuleConstructor); var mod = Module.getInstance();
     * @config {object} instance An object that holds the module
     * @return {objcet} An object that returns the module via .getInstance()
     */
    return (function () {
        var instance;
        
        /**
         * Create the new module
         */
        function createInstance(opts) {
            var object = moduleConstructor(opts);
            return object;
        }
        
        /**
         * Return an objcet with .getInstance() that returns the module
         * @param {oject} opts Passes the option for the module
         * @config {object} instance If the instance is empty create new module, else return instance
         * @return {object} returns the module (instance)
         */
        return {
            getInstance: function (opts) {
                if (!instance) instance = createInstance(opts);
                return instance;
            }
        };
    })();
}

/** @export */
module.exports = Singleton;
},{}],2:[function(require,module,exports){
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
},{"../../singleton":1}]},{},[2]);
