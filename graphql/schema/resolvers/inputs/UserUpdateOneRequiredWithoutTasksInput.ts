import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";
import { UserUpsertWithoutTasksInput } from "../inputs/UserUpsertWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTasksInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutTasksInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutTasksInput, {
    nullable: true,
  })
  create?: UserCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutTasksInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutTasksInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutTasksInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutTasksInput | undefined;
}
