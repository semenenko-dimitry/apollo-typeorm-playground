import {Args, Mutation, Query, Resolver} from "type-graphql";
import {UserObjType, AddUserArgType} from "../Types/User";
import getPgClient from "../db/connect";

@Resolver()
export class UserResolver {
	constructor() {}

	@Query(() => [UserObjType])
	public async users(): Promise<UserObjType[]> {
		const client = await getPgClient()
		const { rows } = await client.query('SELECT * FROM users')

		return rows
	}

	@Mutation(() => [UserObjType])
	public async addUser(@Args() { name, age }: AddUserArgType): Promise<UserObjType[]> {
		const client = await getPgClient()
		await client.query('INSERT INTO users(name, age) VALUES ($1, $2)', [name, age])
		const { rows } = await client.query('SELECT * FROM users')

		return rows;
	}
}
