interface Iuser{
    nombre:string,
    apellido:string,
    edad: number,
    email:string,
}
const userList: Iuser[] = [
    {
        nombre:"jose",
        apellido:"gon",
        edad:24,
        email:"sldfsndfgmail",
    },
    {
        nombre:"josesdf",
        apellido:"gonsdf",
        edad:24,
        email:"sldfsndfsdfsdfgmail.com",
    },
    {
        nombre:"jossdfsdfe",
        apellido:"gsdfsdfon",
        edad:24,
        email:"sldfsndfgmail",
    }
]

let newuserlist = userList.map(function(value,index:number)
{
    let nombremas = `${value.nombre} ${value.apellido}`;
    let born = new Date().getFullYear() - value.edad;
    let newEmail = value.email;

    if (newEmail.indexOf(".")==-1) {
        newEmail = `${newEmail}.com`
    }
    let newobject = {
        nombremas : nombremas,
        born: born,
        newEmail : newEmail,
    }
    return newobject;
})

console.log(newuserlist);