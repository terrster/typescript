const mainlist: {nombre: string, apellido: string}[]=[
    {
        nombre : "Jonathan",
        apellido : "Villegas",
    },
    {
        nombre : "sfsdf",
        apellido : "werwerwe",
    },
    {
        nombre : "werwer",
        apellido : "werwer",
    }
]

mainlist.forEach(imprimirdato);

function imprimirdato(value: {nombre: string, apellido: string}, index : number){
    let Nombrecompleto = `${index +1} .-${value.nombre} ${value.apellido}`
    console.log(Nombrecompleto);
}

//ejemplo callbacks

/*
function imprimirdato(number: number){
    console.log(number);
}

function calcularvalida(number: number, num2: number, callback: Function){
    let result = number+num2;
    callback(result);
}

calcularvalida(1,2,imprimirdato);
*/