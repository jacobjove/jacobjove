import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutBeliefsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutBeliefsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutBeliefsInput;
}
