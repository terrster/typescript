import { debounceTime, fromEvent, interval, map, mergeAll, Observable, of, pluck, tap } from "rxjs";

import { ajax } from "rxjs/ajax";
import { GithubUser, GithubUsersResp } from "./01-mergeallinterface";

// let ncliks: number = 0;

// const cliks$ = fromEvent(document,'click');

// const hightorden = cliks$.pipe(
//     tap((_)=> ncliks++),
//     map((event) => interval(3000)),
//     mergeAll()
// );

// hightorden.subscribe(console.log);

const body = document.querySelector('body');
const input = document.createElement('input');
const ordenlist = document.createElement('ul');
const div = document.createElement('div');
const div2 = document.createElement('div');

body?.appendChild(div);
body?.appendChild(div2);

div.appendChild(input);
div2.appendChild(ordenlist)

ordenlist.setAttribute("class", "cards");

//helpers

const uxshow = (usuarios: GithubUser[]) =>{
    console.log(usuarios);
    ordenlist.innerHTML='';
    for(const usuario of usuarios){
        
        const li = document.createElement('li');
        const image = document.createElement('img');
        const anchor = document.createElement('a');
        let head = document.createElement('div');

        image.src = usuario.avatar_url;
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blank'

        head.append(image);
        head.append(usuario.login + "");
        head.append(anchor);
        li.appendChild(head);
        ordenlist.append(li)

        head.setAttribute('class', 'card_header');
    }
}

//streams

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck('target', 'value'),
    map<any, Observable<GithubUsersResp>>((value) => ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    mergeAll(),
    pluck('items')
).subscribe({
    next: uxshow,
})