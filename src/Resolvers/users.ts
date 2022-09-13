import users from "../__mock_data";
import {IUser} from "../types";

const userResolver = {
	Query: {
		users: (): IUser[] => {
			return users
		}
	},
	Mutation: {
		addUser: (_parent: any, { name, age }: IUser): IUser[] => {
			users.push({ name, age });
			return users;
		}
	}
}

export default userResolver;
