import {companies, users} from "../__mock_data";
import {Arg, Query, Resolver} from "type-graphql";
import {SearchUnionType} from "../Types";


@Resolver()
export class SearchResolver {
	constructor() {}

	@Query(() => [SearchUnionType])
	public async search(@Arg('phrase') phrase: string): Promise<Array<typeof SearchUnionType>> {
		const userFounded = users.filter(({ name }) => new RegExp(`${phrase}*`).test(name))
		const companiesFounded = companies.filter(({ name }) => new RegExp(`${phrase}*`).test(name))

		return [...userFounded, ...companiesFounded]
	}
}

