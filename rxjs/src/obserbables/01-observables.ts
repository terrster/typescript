/** callbacks Observables
 * Next: todo ok
 * error: Error babas
 * compleate: ya termino tarea 
 */

import { Observable, Observer } from "rxjs";

// const obs$ = new Observable<string>(sub =>{
//     sub.next('hola nn');
//     sub.next('a que hor asales por el pan');
// });

// const array = [10, 20, 30];
// const obs$ = new Observable<number>(sub =>{
//     array.forEach((numero)=>{
//         sub.next(numero);
//     })
// });
// const obs$ = new Observable<number>(sub =>{
//     // const a: any = undefined;
//     // a!.nombre = "Jonathan "
//     sub.complete();
// });

// obs$.subscribe(
//     {next: (value) => console.log(value),
//     error: (err) => console.log('pendejoo mira',err),
//     complete: () => console.log('Fuga'),},
// )
const array = [10, 20, 30];
const obs$ = new Observable<number>(sub =>{
    array.forEach((numero)=>{
        sub.next(numero);
    })
    sub.complete();
});
const observers: Observer<any>={
    next:(value) => console.log('Siguiente [Next]',value),
    error:(err) => console.log('Mira [obs]',err),
    complete:() => console.info('fin del camino[obs]'),
}

obs$.subscribe(observers);
