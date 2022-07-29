import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutListsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutListsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutListsInput, { nullable: false })
  create!: UserCreateWithoutListsInput;
}
