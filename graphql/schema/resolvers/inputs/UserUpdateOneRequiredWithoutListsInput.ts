import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutListsInput } from "../inputs/UserCreateOrConnectWithoutListsInput";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserUpdateWithoutListsInput } from "../inputs/UserUpdateWithoutListsInput";
import { UserUpsertWithoutListsInput } from "../inputs/UserUpsertWithoutListsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutListsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutListsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutListsInput, { nullable: true })
  create?: UserCreateWithoutListsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutListsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutListsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutListsInput, { nullable: true })
  upsert?: UserUpsertWithoutListsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutListsInput, { nullable: true })
  update?: UserUpdateWithoutListsInput | undefined;
}
