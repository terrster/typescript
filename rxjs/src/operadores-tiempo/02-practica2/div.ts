/*
    1- Mostrar una lista con todos los heroes
    2- Mostrar por nombres similares
    3- Filtrar por heroe villano todos
*/
import { heroesLists, tipos } from "./services/arrays"

export let input = document.createElement('input');
export let select = document.createElement('select');
export let list = document.createElement('ul');

let div = document.createElement('div');
let div2 = document.createElement('div');

list.setAttribute("class", "cards");
document.body.appendChild(div);
document.body.appendChild(div2);

div.appendChild(input);
div.appendChild(select);
div2.appendChild(list);

tipos.forEach(element => {
    let option = document.createElement('option');
    option.innerText = `${element}`;
    option.value = element;
    if (element == "Todos") {
      option.setAttribute('selected',"selected")
    }
    select.appendChild(option);
});

export const init = (_herolists: any) => {

    _herolists.forEach((element: { name: string; type: any; }) => {
        let listelement = document.createElement('li');
        let head = document.createElement('div');
        head.innerHTML = `
            <h3 class="card_title">${element.name.toUpperCase()}</h3>
            <p class="card_description">${element.type}</p>`
        list.appendChild(listelement);
        listelement.appendChild(head);
        head.setAttribute('class', 'card_header')
    });
}
