import { concatMap, from, map, mergeMap, Observable, pluck, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { pokeinfo, Result } from "./pokeinterface";

const body = document.querySelector("body");
const ordenlist = document.createElement("ul");

ordenlist.setAttribute("class", "cards");
body?.append(ordenlist)



    ajax.
    getJSON('https://pokeapi.co/api/v2/pokemon').
    pipe(
        pluck('results'),
        mergeMap<any, any>((pokemons: any[]) => 
            from(pokemons).pipe(
                pluck('url'),
                concatMap((url :any) => ajax.getJSON(url).pipe(
                    map<any, any>((poke: pokeinfo) => {
                        const li = document.createElement("li");
                        const span = document.createElement('span')
                        const div = document.createElement('div');
                        const img = document.createElement('img');

                        img.src = poke.sprites.front_default;
                        span.innerHTML = `
                        <h3>${poke.name}<h3>
                        `

                        li.appendChild(div);
                        div.appendChild(span);
                        div.appendChild(img);
                        ordenlist.appendChild(li);

                        div.setAttribute("class", "card_header");
                    })
                )),
        ))).subscribe();