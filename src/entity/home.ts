import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {getManager} from "typeorm";

@Entity({ name: "home" })
export class Home {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column()
    price!: number;

    @Column()
    post_code!: number;


}