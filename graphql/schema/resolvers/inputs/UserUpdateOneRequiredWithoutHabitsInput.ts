import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutHabitsInput } from "../inputs/UserCreateOrConnectWithoutHabitsInput";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserUpdateWithoutHabitsInput } from "../inputs/UserUpdateWithoutHabitsInput";
import { UserUpsertWithoutHabitsInput } from "../inputs/UserUpsertWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutHabitsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutHabitsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutHabitsInput, { nullable: true })
  create?: UserCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutHabitsInput, { nullable: true })
  upsert?: UserUpsertWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutHabitsInput, { nullable: true })
  update?: UserUpdateWithoutHabitsInput | undefined;
}
