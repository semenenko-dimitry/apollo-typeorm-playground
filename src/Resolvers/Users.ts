import users from "../__mock_data";
import {Args, Mutation, Query, Resolver} from "type-graphql";
import {UserObjType, AddUserArgType} from "../Types/User";

@Resolver()
export class UserResolver {
	constructor() {
	}

	@Query(() => [UserObjType])
	public async users(): Promise<UserObjType[]> {
		return users
	}

	@Mutation(() => [UserObjType])
	public async addUser(@Args() { name, age }: AddUserArgType): Promise<UserObjType[]> {
		users.push({ name, age });
		return users;
	}
}

export default UserResolver;
