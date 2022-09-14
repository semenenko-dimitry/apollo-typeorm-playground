import {createUnionType} from "type-graphql";
import {UserObjType} from "./User";
import {CompanyObjType} from "./Company";

export const SearchUnionType = createUnionType({
	name: "SearchUnionType",
	types: () => [UserObjType, CompanyObjType] as const,
	resolveType: value => {
		if ("url" in value) {
			return CompanyObjType;
		}
		if ("age" in value) {
			return UserObjType;
		}
		return undefined;
	},
});


