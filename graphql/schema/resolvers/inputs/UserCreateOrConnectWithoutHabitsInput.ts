import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutHabitsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutHabitsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutHabitsInput, { nullable: false })
  create!: UserCreateWithoutHabitsInput;
}
