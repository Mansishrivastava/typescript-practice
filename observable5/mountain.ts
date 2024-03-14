import {Observable, Subscriber} from 'rxjs';

const observable= new Observable<string>((subscriber)=>
    {
    var value=0
 var interval=  setInterval(() => {
        if (value<10){
    subscriber.next("mountain"+value++);
        }
        else{
            subscriber.complete();
            clearInterval(interval);
        }
    }, 1000);
    })

    const subcription=observable.subscribe({
    next:(value)=>console.log(value),
    complete:()=>console.log('complete'),
    error:(error)=>console.log(error)
    })