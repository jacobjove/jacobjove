import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserArgs {
  @TypeGraphQL.Field(() => UserUpdateInput, { nullable: false })
  data!: UserUpdateInput;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;
}
