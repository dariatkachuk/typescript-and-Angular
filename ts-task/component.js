"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = /** @class */ (function () {
    function Component(_numLike, _isActive) {
        this._numLike = _numLike;
        this._isActive = _isActive;
        this._numLike = _numLike | 0;
        this._color = (this._isActive) ? 'yellow' : 'blue';
        this._isActive = _isActive || false;
    }
    Component.prototype.click = function () {
        this._numLike += (this._isActive) ? -1 : +1;
        this._color = (this._isActive) ? 'blue' : 'yellow';
        this._isActive = !this._isActive;
        console.log("The button is " + this.isActive + ": color - " + this.color + ", number of Likes: " + this.numLike + ".");
    };
    Object.defineProperty(Component.prototype, "numLike", {
        get: function () {
            return this._numLike;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Component.prototype, "color", {
        get: function () {
            return this._color;
        },
        enumerable: true,
        configurable: true
    });
    return Component;
}());
exports.Component = Component;
