import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateInput } from "../../../inputs/UserCreateInput";
import { UserUpdateInput } from "../../../inputs/UserUpdateInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserArgs {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateInput, { nullable: false })
  create!: UserCreateInput;

  @TypeGraphQL.Field(() => UserUpdateInput, { nullable: false })
  update!: UserUpdateInput;
}
