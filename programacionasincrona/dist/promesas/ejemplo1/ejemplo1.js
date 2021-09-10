"use strict";
/*
*Estados que pueden tener las promesas

*Existen tres estados posibles para una promesa y estos son:

    !Pendiente. De base todas las promesas están pendientes.
    !Resuelta. Estará resuelta en el momento que llamemos a resolve y a continuación se ejecuta la función que pasamos al método .then. Debemos de tener en cuenta que una vez resuelta no podremos modificar el valor de la promesa, aunque si podríamos correr la misma instrucción para obtener un valor distinto y hacerlo las veces que deseemos.
    !Rechazada. Pasará a estar rechazada cuando llamemos a reject y obtengamos un error que nos indicará ese rechazo, pasando a continuación a ejecutar la función que pasamos a .catch.


*/
const promesa1 = new Promise((resolve, reject) => {
    let task_done = false;
    if (task_done) {
        resolve('lo lograste bb');
    }
    else {
        reject("sorry bb pa la proxima");
    }
});
console.log("1");
promesa1.then(result => { console.log(result); }).catch(error => { console.log(error); });
console.log("2");
//# sourceMappingURL=ejemplo1.js.map