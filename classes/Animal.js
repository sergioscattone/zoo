"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this._particularSound = '';
        this._name = name;
    }
    Animal.prototype.speak = function (speach) {
        return speach.split(' ').join(" " + this._particularSound + " ");
    };
    Animal.prototype.getName = function () {
        return this._name.toUpperCase();
    };
    return Animal;
}());
exports["default"] = Animal;
