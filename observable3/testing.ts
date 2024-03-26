import { Observable, Subscriber } from 'rxjs';

const observable=new Observable<string>(subscriber=>{
setTimeout(() => {
    subscriber.next("Hello")
    setTimeout
}, 1000);
setTimeout(() => {
    subscriber.next("world")
}, 2000);
setTimeout(() => {
    subscriber.complete();
}, 3000);
})
observable.subscribe(
    value=>console.log(value),
    error=>console.log(error)
)

// const obs=new Observable<string>(subscriber=>{
//     subscriber.next("hello");
//     subscriber.complete();
// })
// obs.subscribe(
//     value=>console.log(value),
//     error=>console.log(error)

// )