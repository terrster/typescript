import { createConnection, Connection } from "typeorm";
import { QuotesGame } from "./entitys/api.entity";

export class conect {
    public async conexion(condition: boolean){
        await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "terrster",
        password: "Plastic_2010",
        database: "game",
        entities: [
            QuotesGame
        ],
        synchronize: condition,
        logging: condition
    })
    
    }
}