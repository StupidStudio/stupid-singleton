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
     * @example var module = Singleton(ModuleConstructor).getInstance(); 
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