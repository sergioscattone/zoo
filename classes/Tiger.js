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
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._particularSound = 'grrr';
        return _this;
    }
    Tiger.prototype.speak = function (speach) {
        return _super.prototype.speak.call(this, speach);
    };
    Tiger.prototype.sellCereals = function () {
        // get Cereals
        // take out your inner tiger
        // sell Cereals
    };
    return Tiger;
}(Animal_1["default"]));
exports["default"] = Tiger;
