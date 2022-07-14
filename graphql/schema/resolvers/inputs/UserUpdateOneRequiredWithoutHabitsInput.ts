import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutHabitsInput } from "../inputs/UserCreateOrConnectWithoutHabitsInput";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserUpdateWithoutHabitsInput } from "../inputs/UserUpdateWithoutHabitsInput";
import { UserUpsertWithoutHabitsInput } from "../inputs/UserUpsertWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutHabitsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutHabitsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutHabitsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutHabitsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutHabitsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutHabitsInput | undefined;
}
