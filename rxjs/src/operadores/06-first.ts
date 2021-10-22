import { first, fromEvent, map, range, tap } from "rxjs";

let number$ = range(1,10).pipe(
    first(
        (val) => val%2 ==0
    )
);
/** 
number$.subscribe({
    next: (valor) => console.log(valor),
    complete: () => console.log('Orden 2 lista')
});
*/

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    // tap<MouseEvent>(console.log),
    map((event) => ({
            x: event.clientX,
            y: event.clientY
        })
    ),
    first((cordenadas) => cordenadas.x >= 175)
).subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('A webo chismecito')
})