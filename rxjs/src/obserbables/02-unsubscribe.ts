import { Observable, Observer } from "rxjs";

const observers: Observer<any>={
    next:(value) => console.log('Siguiente [Next]',value),
    error:(err) => console.log('Mira [obs]',err),
    complete:() => console.info('fin del camino[obs]'),
}

const intervalo$ = new Observable<number>(sub =>{
    let contador = 0;
    setInterval(()=>{
        contador++;
        sub.next(contador);
    },1000)
    setTimeout(() => {
        sub.complete();
    }, 10000);
})

const sub1= intervalo$.subscribe(observers);

setTimeout(()=>{
    sub1.unsubscribe();
},15000);