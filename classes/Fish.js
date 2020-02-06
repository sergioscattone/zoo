"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._particularSound = 'gluglu';
        return _this;
    }
    Fish.prototype.speak = function (speach) {
        return _super.prototype.speak.call(this, speach);
    };
    Fish.prototype.takeControlGotham = function () {
        // find the penguin
        // kill the penguin
        // take control of gotham
    };
    return Fish;
}(Animal_1["default"]));
exports["default"] = Fish;
