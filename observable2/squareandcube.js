"use strict";
// We'll implement a program where we have a source of numbers and two subscribers
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = new rxjs_1.Observable(function (subscriber) {
    var count = 0;
    var interval = setInterval(function () {
        if (count < 5) {
            subscriber.next(++count);
        }
        else {
            subscriber.complete();
            clearInterval(interval);
        }
    }, 1000);
});
var squareSubscriber = source.subscribe({
    next: function (num) { return console.log("Original", num, "| Squared", num * num); },
    complete: function () { return console.log("Square subscription completed"); }
});
var cubeSubscriber = source.subscribe({
    next: function (num) { return console.log("Original", num, "| Cubed", num * num * num); },
    complete: function () { return console.log("Cube subscription completed"); }
});
