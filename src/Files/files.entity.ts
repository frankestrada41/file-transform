import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class File{
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name:string;

    @Column()
    lastName: string;

    @Column()
    age:number;

    @Column()
    hasPet:boolean;
    
}