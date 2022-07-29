import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserUpdateWithoutNotebooksInput } from "../inputs/UserUpdateWithoutNotebooksInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserUpsertWithoutNotebooksInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutNotebooksInput, { nullable: false })
  update!: UserUpdateWithoutNotebooksInput;

  @TypeGraphQL.Field(() => UserCreateWithoutNotebooksInput, { nullable: false })
  create!: UserCreateWithoutNotebooksInput;
}
