import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutIdentitiesInput } from "../inputs/UserCreateOrConnectWithoutIdentitiesInput";
import { UserCreateWithoutIdentitiesInput } from "../inputs/UserCreateWithoutIdentitiesInput";
import { UserUpdateWithoutIdentitiesInput } from "../inputs/UserUpdateWithoutIdentitiesInput";
import { UserUpsertWithoutIdentitiesInput } from "../inputs/UserUpsertWithoutIdentitiesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutIdentitiesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutIdentitiesInput, { nullable: true })
  create?: UserCreateWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutIdentitiesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutIdentitiesInput, { nullable: true })
  upsert?: UserUpsertWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutIdentitiesInput, { nullable: true })
  update?: UserUpdateWithoutIdentitiesInput | undefined;
}
