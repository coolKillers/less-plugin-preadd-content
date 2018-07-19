/**
 * Created by renlong on 2018/7/17.
 */
module.exports = (function (less) {
    var PreAdd = function (options) {
        this.options = options;
    };
    PreAdd.prototype = {
        process: function (less, extra) {
            var f = this.options && this.options.prev;
            if (typeof f === 'function') {
                return f.call(this, less, extra);
            }
            return less;
        }
    };
    return PreAdd;
});