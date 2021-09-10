import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Console } from "console";
import { getConnection, getManager } from "typeorm";
import { Quotes } from "../database/entitys/quotes.entitys";
import { Iquote } from "./interface/quote.interface";

export class GetquotesApi {
    private _config: AxiosRequestConfig = {
        method: "GET",
        url: "https://www.breakingbadapi.com/api/quotes"
    }
    public  async requestData(): Promise<void> {
        let listq: Iquote[] = []
        
        let Response: AxiosResponse<Iquote[]> = await axios(this._config);

        listq = Response.data.map((quotes)=>({
            author: quotes.author,
            quote: quotes.quote,
            series: quotes.series,
        }));

        this.savequotes(listq)
        console.log(listq);
    }

    public async savequotes(list: Iquote[]){

        try {
            await getConnection().getRepository(Quotes).createQueryBuilder().insert().into(Quotes).values(list).execute();
        } catch (error) {
            console.log("Pendejo",error);
        }   
    }

    public async GetByAuthorquotes(author: string){
        try {
            let byauthor = await getManager().getRepository(Quotes).createQueryBuilder("quotes").where("quotes.author=:author",{author:author}).execute();
            console.log(byauthor)
        } catch (error) {
            console.log("jajajaj ")
        }
    }
}