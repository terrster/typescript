import { of, range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

let sub1 = numeros$.pipe(
    tap((valor) => console.log('Valor Inicial', valor)),
    map((numero) => numero*5),
    tap((valor) => console.log('Valor Final', valor)),
)

sub1.subscribe();