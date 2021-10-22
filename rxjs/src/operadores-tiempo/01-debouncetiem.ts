import { debounceTime, fromEvent, pluck } from "rxjs";

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(debounceTime(3000)).subscribe({
    next: (e: MouseEvent) => console.log(e)
});

let input = document.createElement('input');
document.querySelector('body')?.append(input);

const input$ = fromEvent(input,'keyup');
input$.pipe(
    debounceTime(3000),
    pluck('target','value'),
    ).subscribe({
    next: (e) => console.log(e),
})



