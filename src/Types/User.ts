import {ArgsType, Field, Int, ObjectType} from "type-graphql";
import {Min} from "class-validator";

@ArgsType()
export class AddUserArgType {
	@Field(() => String)
	public name: string

	@Field(() => Int)
	@Min(18, { message: "User age must be appropriate value" })
	public age: number
}
