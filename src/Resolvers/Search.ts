import {companies} from "../__mock_data";
import {Arg, Query, Resolver} from "type-graphql";
import {SearchUnionType} from "../Types";
import getPgClient from "../db/connect";


@Resolver()
export class SearchResolver {
	constructor() {}

	@Query(() => [SearchUnionType])
	public async search(@Arg('phrase') phrase: string): Promise<Array<typeof SearchUnionType>> {
		const client = await getPgClient()
		const { rows: users } = await client.query('SELECT * FROM users')

		const userFounded = users.filter(({ name }) => new RegExp(`${phrase}*`).test(name))
		const companiesFounded = companies.filter(({ name }) => new RegExp(`${phrase}*`).test(name))

		return [...userFounded, ...companiesFounded]
	}
}

