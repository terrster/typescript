import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { EntityManager, getConnection, getManager, getRepository } from "typeorm";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";
import { QuotesGame } from "../database/entitys/api.entity";
import { Iapi, IGames } from "../interface/interface";

export class funcion{

    private _config: AxiosRequestConfig = {
        method: "GET",
        url: "https://game-of-thrones-quotes.herokuapp.com/v1/random/80"
    }
    
    public async peticion(): Promise <void>{
        let listagames: IGames[] = [];

        let respuesta: AxiosResponse<Iapi[]> = await axios(this._config);
        

        listagames = respuesta.data.map((nota)=>({
            quote: nota.sentence,
            caracter: nota.character.name,
            house:nota.character.house.name
        }))
        this.salvar(listagames);
        // console.log(respuesta.data)
        // console.log(listagames)
    }

    public async salvar(lista: IGames[]){
        try {
            
            await getConnection().getRepository(QuotesGame).createQueryBuilder().insert().into(QuotesGame).values(lista).execute();

        } catch (error) {
           console.log(error); 
        }
    }

    public async obtener(caracter: string){
        try {
            let byauthor = await getManager().getRepository(QuotesGame).createQueryBuilder("quote").where("quote.caracter=:caracter",{caracter: caracter}).execute();
            console.log(byauthor)
        } catch (error) {
            console.log("jajajaj ")
        }
    }

    public async nombre() {
        const nombre: string = QuotesGame.name;
        let nombres = await getConnection().createQueryRunner().getTable("prueba");
        let xa = nombres
        console.log(nombre);
        console.log(xa);

        //prueba
        
    }
}