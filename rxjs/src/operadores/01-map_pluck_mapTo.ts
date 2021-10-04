import { from, fromEvent, map, mapTo, pluck, range } from "rxjs";

// const ob$ = range(1,5).pipe(
//     map((valor: number) => {return valor*Math.random()})
//     );

// ob$.subscribe(
//     {next: (valor)=> console.log('numero multiplicado',valor)}
// )

let numberlist = [1,2,3,4,5,6,7,8,9,10,11,12,13]

//* Observable Global
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

//*! Observable Global con operadores
const sub1 = keyup$.
    pipe(
        map((kbevent: KeyboardEvent) =>  kbevent.code)
    );
const sub2 = keyup$.pipe(
    pluck('target', 'baseURI')
);
const sub3$ = click$.pipe(mapTo('Hola mundo'));
sub3$.subscribe({
    next: (value) => console.log(value),
});

const numberlist$ = from(numberlist).pipe(mapTo('ejemplo2'));
numberlist$.subscribe({
    next: (value) => console.log(value),
})
/*
sub1.subscribe(
    {
        next: (value) => console.log(value)
    }
)
sub2.subscribe(
    {
        next: (value) => console.log(value)
    }
)
*/