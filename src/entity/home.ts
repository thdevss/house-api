import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, getManager } from "typeorm";

@Entity({ name: "home" })
export class Home extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    desc!: string;

    @Column("decimal")
    price!: number;

    @Column()
    post_code!: number;


}