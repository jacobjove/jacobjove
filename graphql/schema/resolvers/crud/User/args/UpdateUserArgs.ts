import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserArgs {
  @TypeGraphQL.Field((_type) => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
