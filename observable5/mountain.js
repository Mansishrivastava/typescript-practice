"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    var value = 0;
    setInterval(function () {
        subscriber.next("mountain" + value++);
    }, 1000);
});
var subcription = observable.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('complete'); },
    error: function (error) { return console.log(error); }
});
