"use strict";
exports.__esModule = true;
// Class - Blueprint of code
var Payment = /** @class */ (function () {
    function Payment(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    } // this is very good way to use class without initializing properties
    Payment.prototype.format = function () {
        return this.recipient + " is owed " + this.amount + "$ for " + this.details;
    };
    return Payment;
}());
exports["default"] = Payment;
