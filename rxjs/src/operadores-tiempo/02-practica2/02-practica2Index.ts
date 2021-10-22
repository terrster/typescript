import { debounceTime, distinctUntilChanged,  from, fromEvent, map, merge,  pluck,  } from "rxjs";
import { select, input, list, init } from "./div";
import { heroesLists, } from "./services/arrays"

init(heroesLists);
filtro();
sele();

function filtro() {

  const input$ = fromEvent(input, 'keyup').pipe(
    debounceTime(300),
    pluck('target', 'value'),
    distinctUntilChanged(),
    map((target: any) => {
      let filtro = select.value
      let nuevo: any[] = [];
      if (filtro == 'Todos') {
        nuevo = heroesLists.filter(
          (value) => value.name.toLowerCase().includes((target as string).toLowerCase())
          );
      } else{
        nuevo = heroesLists.filter(
          (value) => value.name.toLowerCase().includes((target as string).toLowerCase()) && value.type == filtro
          );
      }
      while(list.hasChildNodes()){
        list.childNodes[0].remove();
      }
      init(nuevo)
      return nuevo
    }),
    
    ).subscribe();
}

function refresh(list: any) {

  from(list).pipe(
    
  )
}

function sele(){

  const select$ = fromEvent(select.options, 'click').pipe(      
    pluck('target','value'),
    map( (val) => {
      let valorinput = input.value
      let lista = 
      (val === "Heroe") ? (heroesLists.filter((value) => value.type == "Heroe")) : 
      (val === "Villano")? (heroesLists.filter((value) => value.type == "Villano")) : 
      heroesLists;
      let heroes = lista.filter((value) => value.name.toLowerCase().includes((valorinput as string).toLowerCase()))
      while(list.hasChildNodes()){
        list.childNodes[0].remove();
      }
      init(heroes);
      return lista
      
    }
    ),
  ).subscribe();
}








