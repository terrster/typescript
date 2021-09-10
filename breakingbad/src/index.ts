import { GetquotesApi } from "./getquotes/getquotes";
import { conect } from "./database/index";

const conectinstances = new conect();
conectinstances.conexion(false).then(connection => {
    const getquotesApiInstance = new GetquotesApi();
    getquotesApiInstance.GetByAuthorquotes("Walter White");
}).catch(error => console.log(error));


// const executeQuotesApi = new GetquotesApi();
// executeQuotesApi.GetByAuthorquotes("Walther White");
