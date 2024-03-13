"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var observable = new rxjs_1.Observable(function (subscriber) {
    setTimeout(function () {
        subscriber.next("Hello");
        setTimeout;
    }, 1000);
    setTimeout(function () {
        subscriber.next("world");
    }, 2000);
    setTimeout(function () {
        subscriber.complete();
    }, 3000);
});
observable.subscribe(function (value) { return console.log(value); }, function (error) { return console.log(error); });
