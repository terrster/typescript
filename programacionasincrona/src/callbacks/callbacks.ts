/**
    
** Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. En el siguiente ejemplo, la función foo recibe por parámetro otra función, que es el callback. La función foo es la encargada de ejecutar el callback.

*/
function foo(callback: Function) {
    callback();
}

/**
  *TODO Es importante tener en cuenta que cuando pasamos un callback solo pasamos la definición de la función y no la ejecutamos en el parámetro. Así, la función contenedora elige cuándo ejecutar el      callback.Un ejemplo muy común de callback es como función escuchadora de un evento.
 */

// let showalert= ()=>{
//     console.log("Hoy no nn")
// }

// window.addEventListener('click', showalert);

/**
 *TODO Los callbacks también se utilizan para “avisar” cuando una función termina de hacer algo
 */

function foo2 (callback: Function){
    console.log(2+2);
    callback();
}

foo2(()=>{console.log('Finalizado')});

/**
 *! FOREACH creado desde cero 
 */

let numberlist: number[] = [1,2,3,4,5,6,7,8,9,10];

numberlist.forEach((value, index)=> {
    console.log(value*2);
})

function PorCada(Lista:any[],callback:Function){
    for (let i = 0; i < Lista.length; i++) {
        callback(Lista[i], i);
        
    }
}

PorCada(numberlist,(value:any, index:number)=> {
    console.log(`${index} - ${value*2}`);    
})

function filtro(lista:any[], callback: Function) {
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        callback(element,i) 
    }
}

let filtrado: any[] = [];
filtro(numberlist,(value:any, index:number)=> value > 3 ? filtrado.push(value):console.log('falso'));
// console.log(filtrado);

//*! .Map desde cero */

function mapa(lista:any[],callback:Function) {
    let x: any[] = [];
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];        
        x.push(callback(element,i));
    }
    return x;
}

let nuevo = mapa(numberlist,(value:any, index:number)=>`Nuevo elemento - ${value}`);
console.log("Nuevo array",nuevo);