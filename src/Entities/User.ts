import {Entity, Column, PrimaryGeneratedColumn} from "typeorm"
import {Field, Int, ObjectType} from "type-graphql";

@Entity('users')
@ObjectType()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	@Field(() => String)
	name: string

	@Column()
	@Field(() => Int)
	age: number
}
