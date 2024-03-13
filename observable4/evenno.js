"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var evenno = new rxjs_1.Observable(function (subscriber) {
    var interval = setInterval(function () {
        var random_no = Math.floor(Math.random() * 100) + 1;
        subscriber.next(random_no);
    });
});
var subcription = evenno.pipe((0, rxjs_1.filter)(function (number) { return number % 2 == 0; })).subscribe({
    next: function (value) { return console.log('Even no' + value); },
    error: function (error) { return console.log('error' + error); },
    complete: function () { return console.log("Completed"); }
});
setTimeout(function () {
    subcription.unsubscribe();
}, 5000);
