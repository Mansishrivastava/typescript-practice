import { Observable, Subscriber, filter } from "rxjs";

const evenno=new Observable<number>((subscriber)=>{
    const interval= setInterval(()=>{
        const random_no=Math.floor(Math.random()*100)+1;
        subscriber.next(random_no);
    })
})
const subcription=evenno.pipe(filter((number)=>number%2==0)).subscribe({
    next:(value)=>console.log('Even no'+value),
    error:(error)=>console.log('error'+error),
    complete:()=>console.log("Completed")
})
setTimeout(() => {
    subcription.unsubscribe();
}, 5000);