import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutHabitsInput } from "../inputs/UserCreateOrConnectWithoutHabitsInput";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutHabitsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutHabitsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutHabitsInput, { nullable: true })
  create?: UserCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
