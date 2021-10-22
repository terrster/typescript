import {
    firstValueFrom,
    from,
    fromEvent,
    map,
    mergeAll,
    mergeMap,
    Observable,
    tap,
} from "rxjs";
import { ajax } from "rxjs/ajax";
import { llamada } from "./02-practica";
import { PersonaObject } from "./breakingbadapi";

const body = document.querySelector("body");
export const button = document.createElement("button");
const span = document.createElement("span");
const div = document.createElement("div");
export const div2 = document.createElement("div");
export const div3 = document.createElement("div");

export const ordenlist = document.createElement("ul");

body?.appendChild(div);
body?.appendChild(div2);
body?.appendChild(div3);
div.appendChild(button);
button.appendChild(span);
div3.appendChild(ordenlist);

// div2.setAttribute('style', 'position: fixed;')

span.innerText = "Obtener Frase Random";
span.setAttribute("class", "bn31span");
button.setAttribute("class", "bn31");
ordenlist.setAttribute("class", "cards");

//inicia logica

const perxone = async () => {
    ajax
        .getJSON("https://www.breakingbadapi.com/api/characters")
        .pipe(
            mergeMap<any,any>((personajes:any) =>
                from(personajes).pipe(
                    map<any,any>((personaje: PersonaObject) => {
                        const li = document.createElement("li");
                        const image = document.createElement("img");
                        const anchor = document.createElement("a");
                        let head = document.createElement("div");

                        const image$ = fromEvent(image, "click");
                        image$
                            .pipe(
                                map((value) =>
                                    ajax.getJSON(
                                        `https://www.breakingbadapi.com/api/quote/random?author=${personaje.name}`
                                    )
                                ),
                                mergeAll()
                            )
                            .subscribe({
                                next: llamada,
                            });

                        image.src = personaje.img;
                        anchor.text = personaje.name;
                        anchor.target = "_blank";

                        head.append(image);
                        head.append(anchor);
                        li.appendChild(head);
                        ordenlist.append(li);

                        head.setAttribute("class", "card_header");
                    })
                )
            )
        )
        .subscribe();
    
};

perxone();

