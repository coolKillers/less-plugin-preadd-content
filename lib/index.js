/**
 * the plugin
 */

function PreAdd(options) {
    this.options = options;
}

var getPreAdd = require('./PreAdd');

PreAdd.prototype = {
    install: function(less, pluginManager) {
        var _PreAdd = getPreAdd(less);
        pluginManager.addPreProcessor(new _PreAdd(this.options), 1);
    },
    setOptions: function(options) {
        this.options = options;
    },
    minVersion: [1, 0, 0]
};
module.exports = PreAdd;
