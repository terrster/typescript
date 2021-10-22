import { fromEvent, map, mergeAll, from, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

import { button, div2 } from "./02-body";
import { breakingbadapi } from "./breakingbadapi";

const button$ = fromEvent<MouseEvent>(button, "click");

button$
    .pipe(
        map((value) => ajax.getJSON("https://breakingbadapi.com/api/quote/random")),
        mergeAll()
    )
    .subscribe({
        next: llamada,
    });

export function llamada(algo: any) {
    console.log(algo);
    let frases: breakingbadapi[] = algo;
    
    if (frases.length == 0) {
        div2.innerHTML = `
        <h1>Lo siento</h1>
        <h3>Pero no es lo demaciado cool para estar aqui</h3>
    `;
    }

    frases.forEach((element) => {
        const nombre = element.author;
        const frase = element.quote;
        div2.innerHTML = "";
        div2.innerHTML = `
                <h1>${nombre}</h1>
                <h3>${frase}</h3>
                `;
    });
}
