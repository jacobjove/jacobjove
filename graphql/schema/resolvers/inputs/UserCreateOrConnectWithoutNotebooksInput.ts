import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutNotebooksInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebooksInput, { nullable: false })
  create!: UserCreateWithoutNotebooksInput;
}
