// We'll implement a program where we have a source of numbers and two subscribers

import { Observable, Subscriber } from "rxjs";

const source = new Observable<number>((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count < 5) {
      subscriber.next(++count);
    } else {
      subscriber.complete();
      clearInterval(interval);
    }
  }, 1000);
});

const squareSubscriber = source.subscribe({
  next: (num) => console.log("Original",num,"| Squared", num * num),
  complete: () => console.log("Square subscription completed")
});

const cubeSubscriber=source.subscribe({
    next:(num)=>console.log("Original",num,"| Cubed",num*num*num),
    complete:()=>console.log("Cube subscription completed")
})