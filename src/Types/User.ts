import {ArgsType, Field, Int, ObjectType} from "type-graphql";
import {Min} from "class-validator";

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
	@Min(18, { message: "User age must be appropriate value" })
	public age: number
}
