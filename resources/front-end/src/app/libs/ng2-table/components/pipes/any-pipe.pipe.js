"use strict";
var core_1 = require('@angular/core');
var AnyPipe = (function () {
    function AnyPipe() {
    }
    AnyPipe.prototype.transform = function (value, pipe) {
        if (!pipe) {
            return value;
        }
        return pipe.transform(value);
    };
    AnyPipe.decorators = [
        { type: core_1.Pipe, args: [{
                    name: 'anyPipe',
                    pure: false
                },] },
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    AnyPipe.ctorParameters = [];
    return AnyPipe;
}());
exports.AnyPipe = AnyPipe;
