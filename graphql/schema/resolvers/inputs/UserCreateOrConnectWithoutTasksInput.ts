import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutTasksInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutTasksInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutTasksInput, { nullable: false })
  create!: UserCreateWithoutTasksInput;
}
