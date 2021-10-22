import { fromEvent, interval, map, skip, takeUntil, tap, } from "rxjs";

const div:HTMLDivElement = document.createElement('div');
const divBigNumber:HTMLParagraphElement = document.createElement('p');

divBigNumber.setAttribute('class', 'number fadeIn');
document.querySelector('body')?.append(div);
div.append(divBigNumber);

const button = document.createElement('button');
button.innerHTML = 'Detener cronometro'
document.querySelector('body')?.append(button);

//*Observables*/

const click$ = fromEvent<MouseEvent>(button,'click');
const interval$ = interval(1000);


interval$.pipe(
    skip(1),
    takeUntil(click$))

.subscribe(
    {
        next: (number) => divBigNumber.innerText = number.toString(),
    }
);