var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shapes = /** @class */ (function () {
    function Shapes(color) {
        this.color = color;
    }
    return Shapes;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, length, width) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    /**
     * calculatedArea
     */
    Rectangle.prototype.calculatedArea = function () {
        return this.length * this.width;
    };
    /**
     * displayedArea
     */
    Rectangle.prototype.displayedArea = function () {
        console.log("The ".concat(this.color, " rectangle area is") + this.calculatedArea());
    };
    return Rectangle;
}(Shapes));
var rectangle1 = new Rectangle("red", 7, 10);
rectangle1.displayedArea();
