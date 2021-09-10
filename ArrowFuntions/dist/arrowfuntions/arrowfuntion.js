"use strict";
// function fun1(num1:number, num2:number) {
//     let result = num1 + num2;
//     return result;
// }
// let res = fun1 (5,6);
// console.log("🚀 ~ file: arrowfuntion.ts ~ line 7 ~ res", res)
// console.log(res);
// let arrowres = (num1:number, num2:number)=> num1 + num2;
// console.log("🚀 ~ file: arrowfuntion.ts ~ line 12 ~ arrowres", arrowres(7,8));
// let arrow3 = (saludo:string)=>saludo.toLowerCase();
let myFunction = (palabra, palabra2) => palabra.split("").reverse().join("") == palabra2 ? "Son iguales" : "No son iguales";
console.log(myFunction("hola mundo", "odnum aloh"));
//# sourceMappingURL=arrowfuntion.js.map