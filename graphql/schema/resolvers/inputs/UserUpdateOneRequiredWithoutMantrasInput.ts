import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutMantrasInput } from "../inputs/UserCreateOrConnectWithoutMantrasInput";
import { UserCreateWithoutMantrasInput } from "../inputs/UserCreateWithoutMantrasInput";
import { UserUpdateWithoutMantrasInput } from "../inputs/UserUpdateWithoutMantrasInput";
import { UserUpsertWithoutMantrasInput } from "../inputs/UserUpsertWithoutMantrasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutMantrasInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutMantrasInput {
  @TypeGraphQL.Field(() => UserCreateWithoutMantrasInput, { nullable: true })
  create?: UserCreateWithoutMantrasInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutMantrasInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutMantrasInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutMantrasInput, { nullable: true })
  upsert?: UserUpsertWithoutMantrasInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutMantrasInput, { nullable: true })
  update?: UserUpdateWithoutMantrasInput | undefined;
}
