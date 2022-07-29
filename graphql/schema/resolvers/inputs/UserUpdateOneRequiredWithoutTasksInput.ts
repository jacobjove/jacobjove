import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutTasksInput } from "../inputs/UserCreateOrConnectWithoutTasksInput";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";
import { UserUpsertWithoutTasksInput } from "../inputs/UserUpsertWithoutTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTasksInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutTasksInput {
  @TypeGraphQL.Field(() => UserCreateWithoutTasksInput, { nullable: true })
  create?: UserCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutTasksInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutTasksInput, { nullable: true })
  upsert?: UserUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutTasksInput, { nullable: true })
  update?: UserUpdateWithoutTasksInput | undefined;
}
