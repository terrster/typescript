import { conect } from "./database";
import { funcion } from "./obtencion/obtencion";

const conectinstance = new conect();

conectinstance.conexion(false).then(connection => {
    const funtionInstance = new funcion();
    funtionInstance.nombre();
    
}).catch(error => console.log("error conexion",error));

// const obtencion = new funcion();
// obtencion.peticion();