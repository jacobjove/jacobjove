import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutHabitsInput } from "../inputs/UserCreateOrConnectWithoutHabitsInput";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutHabitsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutHabitsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutHabitsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
