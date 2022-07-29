import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBeliefsInput } from "../inputs/UserCreateOrConnectWithoutBeliefsInput";
import { UserCreateWithoutBeliefsInput } from "../inputs/UserCreateWithoutBeliefsInput";
import { UserUpdateWithoutBeliefsInput } from "../inputs/UserUpdateWithoutBeliefsInput";
import { UserUpsertWithoutBeliefsInput } from "../inputs/UserUpsertWithoutBeliefsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBeliefsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBeliefsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutBeliefsInput, { nullable: true })
  create?: UserCreateWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutBeliefsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutBeliefsInput, { nullable: true })
  upsert?: UserUpsertWithoutBeliefsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutBeliefsInput, { nullable: true })
  update?: UserUpdateWithoutBeliefsInput | undefined;
}
