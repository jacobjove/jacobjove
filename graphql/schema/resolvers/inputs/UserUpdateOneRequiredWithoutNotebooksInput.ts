import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutNotebooksInput } from "../inputs/UserCreateOrConnectWithoutNotebooksInput";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserUpdateWithoutNotebooksInput } from "../inputs/UserUpdateWithoutNotebooksInput";
import { UserUpsertWithoutNotebooksInput } from "../inputs/UserUpsertWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutNotebooksInput {
  @TypeGraphQL.Field(() => UserCreateWithoutNotebooksInput, { nullable: true })
  create?: UserCreateWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutNotebooksInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutNotebooksInput, { nullable: true })
  upsert?: UserUpsertWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutNotebooksInput, { nullable: true })
  update?: UserUpdateWithoutNotebooksInput | undefined;
}
