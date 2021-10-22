import { fromEvent, map, takeWhile } from "rxjs";


const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    map( event => ({x: event.x, y: event.y})),
    takeWhile((cordenadas) => cordenadas.y <= 150, true)
).subscribe(
        {
            next: (cordenadas) => console.log(cordenadas.x, cordenadas.y),
            complete: () => console.log('Mira mami sin manos')
        }
)