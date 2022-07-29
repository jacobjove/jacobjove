import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutBookshelvesInput } from "../inputs/UserCreateOrConnectWithoutBookshelvesInput";
import { UserCreateWithoutBookshelvesInput } from "../inputs/UserCreateWithoutBookshelvesInput";
import { UserUpdateWithoutBookshelvesInput } from "../inputs/UserUpdateWithoutBookshelvesInput";
import { UserUpsertWithoutBookshelvesInput } from "../inputs/UserUpsertWithoutBookshelvesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBookshelvesInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutBookshelvesInput {
  @TypeGraphQL.Field(() => UserCreateWithoutBookshelvesInput, { nullable: true })
  create?: UserCreateWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutBookshelvesInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutBookshelvesInput, { nullable: true })
  upsert?: UserUpsertWithoutBookshelvesInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutBookshelvesInput, { nullable: true })
  update?: UserUpdateWithoutBookshelvesInput | undefined;
}
