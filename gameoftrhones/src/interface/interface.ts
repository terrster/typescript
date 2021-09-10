export interface IGames{
    quote: string;
    caracter: string;
    house: string;
}

export interface Iapi {
    sentence: string;
    character: {
        name: string;
        slug: string;
        house:{
            name: string;
            slug: string;
        }
    }
}