import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTasksInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutTasksInput, { nullable: false })
  create!: UserCreateWithoutTasksInput;
}
