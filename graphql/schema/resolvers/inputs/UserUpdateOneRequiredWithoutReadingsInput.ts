import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutReadingsInput } from "../inputs/UserCreateOrConnectWithoutReadingsInput";
import { UserCreateWithoutReadingsInput } from "../inputs/UserCreateWithoutReadingsInput";
import { UserUpdateWithoutReadingsInput } from "../inputs/UserUpdateWithoutReadingsInput";
import { UserUpsertWithoutReadingsInput } from "../inputs/UserUpsertWithoutReadingsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutReadingsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutReadingsInput, { nullable: true })
  create?: UserCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutReadingsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutReadingsInput, { nullable: true })
  upsert?: UserUpsertWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutReadingsInput, { nullable: true })
  update?: UserUpdateWithoutReadingsInput | undefined;
}
