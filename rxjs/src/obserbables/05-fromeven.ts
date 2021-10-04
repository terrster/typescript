import { fromEvent, } from "rxjs";

const ob$ = fromEvent<MouseEvent>(document, 'click');
const ob1$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (value: any) => console.log('Siguiente [Next]',value),
};

ob$.subscribe(
    {
        next: (value) => console.log('este es x',value.x,'este es y', value.y)
    }
);

ob1$.subscribe(
    {
        next: (value) => console.log('este es la tecla',value.key)
    }
);



