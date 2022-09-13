import {ArgsType, Field, Int, ObjectType} from "type-graphql";

@ObjectType()
export class UserObjType {
	@Field(() => String)
	public name: string

	@Field(() => Int)
	public age: number
}

@ArgsType()
export class AddUserArgType {
	@Field(() => String)
	public name: string

	@Field(() => Int)
	public age: number

}
