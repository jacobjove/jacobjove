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
  @TypeGraphQL.Field(() => UserCreateWithoutIdentitiesInput, { nullable: true })
  create?: UserCreateWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutIdentitiesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutIdentitiesInput, { nullable: true })
  upsert?: UserUpsertWithoutIdentitiesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutIdentitiesInput, { nullable: true })
  update?: UserUpdateWithoutIdentitiesInput | undefined;
}
