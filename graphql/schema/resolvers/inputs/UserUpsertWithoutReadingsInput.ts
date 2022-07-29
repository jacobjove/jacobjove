import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserUpdateWithoutReadingsInput } from "../inputs/UserUpdateWithoutReadingsInput";

@TypeGraphQL.InputType("UserUpsertWithoutReadingsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutReadingsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutReadingsInput, { nullable: false })
  update!: UserUpdateWithoutReadingsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutReadingsInput, { nullable: false })
  create!: UserCreateWithoutReadingsInput;
}
