import {createUnionType} from "type-graphql";
import {CompanyObjType} from "./Company";
import {User} from "../Entities/User";

export const SearchUnionType = createUnionType({
	name: "SearchUnionType",
	types: () => [User, CompanyObjType] as const,
	resolveType: value => {
		if ("url" in value) {
			return CompanyObjType;
		}
		if ("age" in value) {
			return User;
		}
		return undefined;
	},
});


