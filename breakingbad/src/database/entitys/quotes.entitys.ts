import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()

export class Quotes{

    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column({length: 250})
    quote: string;

    @Column({length: 75})
    author: string;

    @Column({length: 100})
    series: string;
}