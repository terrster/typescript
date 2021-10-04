import { Observable, Observer,of } from "rxjs";

const observers: Observer<any>={
    next:(value) => console.log('Siguiente [Next]',value),
    error:(err) => console.log('Mira [obs]',err),
    complete:() => console.info('fin del camino[obs]'),
}

const nombre: string = 'Jonathan';
let aleatorio = Math.random();

const array: number[] = [10, 20, 30, 40, 50, 60, 70, 80,];

let promesa1 = new Promise<boolean>((resolve, reject) => {
    if (aleatorio > .3 ) {
        console.log(aleatorio);
        resolve(true);
    } else{
        console.log(aleatorio);
        reject(false);
    }
})

const ob$ = of(promesa1);

ob$.subscribe(observers);