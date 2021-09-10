import { createConnection, Connection } from "typeorm";
import { Quotes } from "./entitys/quotes.entitys";

export class conect {
    public async conexion(condition: boolean){
        await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "terrster",
        password: "Plastic_2010",
        database: "bbq",
        entities: [
            Quotes
        ],
        synchronize: condition,
        logging: condition
    })
    
    }
}