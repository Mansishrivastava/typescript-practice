// Implementing a Simple Library System
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
var Library = /** @class */ (function () {
    function Library() {
        this.bookNames = [];
    }
    Library.prototype.addBook = function (bookName) {
        this.bookNames.push(bookName);
    };
    Library.prototype.removeBook = function (bookName) {
        var index = this.bookNames.indexOf(bookName);
        if (index !== -1) {
            this.bookNames.splice(index, 1);
        }
    };
    Library.prototype.listAllBooks = function () {
        return this.bookNames;
    };
    return Library;
}());
var System = /** @class */ (function (_super) {
    __extends(System, _super);
    function System() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    System.prototype.countBooks = function () {
        return this.listAllBooks().length;
    };
    return System;
}(Library));
var myLibrary = new System();
myLibrary.addBook("The Great Gatspy");
myLibrary.addBook("Concepts of Physics");
myLibrary.addBook("Modern ABC Physics");
console.log("List of Books", myLibrary.listAllBooks());
console.log("Total no. of Books", myLibrary.countBooks());
myLibrary.removeBook("The Great Gatspy");
console.log("List of Books", myLibrary.listAllBooks());
console.log("Total no. of Books", myLibrary.countBooks());
