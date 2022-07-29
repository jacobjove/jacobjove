import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTasksInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutTasksInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutTasksInput, { nullable: true })
  create?: UserCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
