import {Args, Mutation, Query, Resolver} from "type-graphql";
import {AddUserArgType} from "../Types/User";
import getPgClient from "../db/connect";
import {User} from "../Entities/User";

@Resolver()
export class UserResolver {
	constructor() {}

	@Query(() => [User])
	public async users(): Promise<User[]> {
		return await (await getPgClient())
			.getRepository(User)
			.createQueryBuilder('users')
			.getMany()
	}

	@Mutation(() => [User])
	public async addUser(@Args() { name, age }: AddUserArgType): Promise<User[]> {
		const userRepository = (await getPgClient()).getRepository(User)
		await userRepository
			.createQueryBuilder()
			.insert()
			.into(User)
			.values([{ name, age }])
			.execute()

		return await userRepository.find()
	}
}
