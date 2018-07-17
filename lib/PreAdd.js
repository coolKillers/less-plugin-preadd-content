/**
 * Created by renlong on 2018/7/17.
 */
module.exports = (function (less) {
    var PreAdd = function (options) {
        this.options = options;
    };
    PreAdd.prototype = {
        process: function (less, extra) {
            if (this.options.prev) {
                return this.options.prev(less);
            }
            return less;
        }
    };
    return PreAdd;
});