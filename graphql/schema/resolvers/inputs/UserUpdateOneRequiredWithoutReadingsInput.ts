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
  @TypeGraphQL.Field(() => UserCreateWithoutReadingsInput, { nullable: true })
  create?: UserCreateWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutReadingsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutReadingsInput, { nullable: true })
  upsert?: UserUpsertWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutReadingsInput, { nullable: true })
  update?: UserUpdateWithoutReadingsInput | undefined;
}
