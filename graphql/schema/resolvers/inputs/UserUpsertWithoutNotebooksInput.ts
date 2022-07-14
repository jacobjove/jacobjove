import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserUpdateWithoutNotebooksInput } from "../inputs/UserUpdateWithoutNotebooksInput";

@TypeGraphQL.InputType("UserUpsertWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserUpsertWithoutNotebooksInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutNotebooksInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutNotebooksInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebooksInput, {
    nullable: false,
  })
  create!: UserCreateWithoutNotebooksInput;
}
