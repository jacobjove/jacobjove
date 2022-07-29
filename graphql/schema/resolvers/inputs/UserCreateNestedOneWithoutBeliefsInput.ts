import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBeliefsInput } from "../inputs/UserCreateOrConnectWithoutBeliefsInput";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutBeliefsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutBeliefsInput, { nullable: true })
  create?: UserCreateWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutBeliefsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
