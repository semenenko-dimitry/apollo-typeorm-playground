import {companies} from "../__mock_data";
import {Arg, Query, Resolver} from "type-graphql";
import {SearchUnionType} from "../Types";
import getPgClient from "../db/connect";
import {User} from "../Entities/User";


@Resolver()
export class SearchResolver {
	constructor() {}

	@Query(() => [SearchUnionType])
	public async search(@Arg('phrase') phrase: string): Promise<Array<typeof SearchUnionType>> {
		const userRepository = (await getPgClient()).getRepository(User)
		const userFounded = await userRepository
			.createQueryBuilder('users')
			.where("name ILIKE :phrase", { phrase: `${phrase}%` })
			.getMany()

		const companiesFounded = companies.filter(({ name }) => new RegExp(`${phrase}*`).test(name))

		return [...userFounded, ...companiesFounded]
	}
}

