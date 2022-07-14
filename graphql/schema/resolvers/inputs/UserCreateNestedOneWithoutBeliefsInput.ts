import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutBeliefsInput } from "../inputs/UserCreateOrConnectWithoutBeliefsInput";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBeliefsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutBeliefsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBeliefsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
