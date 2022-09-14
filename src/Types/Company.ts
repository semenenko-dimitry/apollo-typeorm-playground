import {Field, Int, ObjectType} from "type-graphql";

@ObjectType()
export class CompanyObjType {
	@Field(() => String)
	public name: string

	@Field(() => String)
	public url: string
}
