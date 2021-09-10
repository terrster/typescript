import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

let axiosconfiguracion: AxiosRequestConfig = {
    method: "GET",
    url: "https://www.breakingbadapi.com/api/quotes"
}

axios(axiosconfiguracion).then((Quotelist: AxiosResponse) => {console.log(Quotelist.data)}).catch (Error => { console.log("Pendejo")})