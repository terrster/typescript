import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class QuotesGame{

    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column({length: 250})
    quote: string;

    @Column({length: 75})
    caracter: string;

    @Column({length: 100})
    house: string;
}