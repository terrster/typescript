"use strict";
const list = [
    {
        nombre: "jose",
        apellido: "gon",
        edad: 25,
        email: "sldfsndfgmail",
    },
    {
        nombre: "josesdf",
        apellido: "gonsdf",
        edad: 27,
        email: "sldfsndfsdfsdfgmail.com",
    },
    {
        nombre: "jossdfsdfe",
        apellido: "gsdfsdfon",
        edad: 28,
        email: "sldfsndfgmail",
    }
];
let usuario = list.find((value, index) => value.edad > 25);
console.log(usuario);
//# sourceMappingURL=find.file.js.map