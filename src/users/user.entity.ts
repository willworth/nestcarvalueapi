import { Logger } from '@nestjs/common';
import {
    AfterInsert,
    AfterRemove,
    AfterUpdate, Entity, Column, PrimaryGeneratedColumn
} from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    email: string;
    @Column()
    password: string;

    // if you don't use the entity (just manually pass an object), hooks are NOT triggered
    @AfterInsert()
    logInsert() {
        // Logger.log('Inserted file with ID', this.id);
        Logger.log(`Inserted User with ID ${this.id}`);
    }
    @AfterUpdate()
    logUpdate() {
        Logger.log(`Updated User with ID ${this.id}`);
    }
    @AfterRemove()
    logRemove() {
        Logger.log(`Removed User with ID ${this.id}`);
    }
}