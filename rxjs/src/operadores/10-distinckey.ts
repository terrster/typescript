import { distinctUntilKeyChanged, from } from "rxjs"

let heros: {name: string, type: string}[]= [
    {
        name: 'Batman',
        type: 'hero',
    },
    {
        name: 'Joker',
        type: 'villan',
    },
    {
        name: 'Bad Bunny',
        type: 'hero',
    },
    {
        name: 'Angel',
        type: 'villan',
    },
    {
        name: 'The King',
        type: 'villan'
    },
    {
        name: 'The King',
        type: 'villan'
    }
];

from(heros).pipe(
    distinctUntilKeyChanged('name')
).subscribe(
    {
        next: (val) => console.log(val),
    }
)