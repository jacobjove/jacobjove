import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBeliefsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutBeliefsInput, { nullable: false })
  create!: UserCreateWithoutBeliefsInput;
}
