import { filter, from, map, mapTo, pluck, range, fromEvent } from "rxjs";
import { Ipersonaje } from "../interfaz/personajeinterface";



const numberlist$ = range(1,30).pipe(filter((valor, index) => valor % 2 == 0));

numberlist$.subscribe({
    next: (value) => console.log(value),
});

const personajes : Ipersonaje[] = [
    {
        tipo : 'hero',
        nombre: 'Batman',
    },
    {
        tipo : 'hero',
        nombre: 'Robin',
    },
    {
        tipo : 'villano',
        nombre: 'Joker',
    },
    {
        tipo : 'villano',
        nombre: 'Harly Queen',
    },
];

// ayudame ama practica 
//* Obtener todos los heroes
//* Obtener el  villano Joker 
//* obtener personajes con a

const hero$ = from(personajes).pipe(
    filter((personaje) => personaje.tipo == 'hero'),pluck('nombre'),
    map((nombre) => `${nombre} es un hero`)
)

const joker$ = from(personajes).pipe(
    filter((personaje) => personaje.nombre == 'Joker'),
    map((villano) => `El ${villano.nombre} es un ${villano.tipo}`)
)

const a$ = from(personajes).pipe(
    filter((personaje) => (personaje.nombre).includes('a')),
    map((personaje) => `El personaje ${personaje.nombre} incluye a en su nombre`)
)

const key$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map((kbevent: KeyboardEvent) =>  kbevent.code),
    filter((tecla) => tecla == 'Enter')
);

hero$.subscribe({
    next: (value) => console.log(value),
});
joker$.subscribe({
    next: (value) => console.log(value),
});
a$.subscribe({
    next: (value) => console.log(value),
});
key$.subscribe({
    next: (value) => console.log(value, 'Enviado'),
    error:(err) => console.log('No es Enter'),
})