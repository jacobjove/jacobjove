import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutNotebooksInput } from "../inputs/UserCreateOrConnectWithoutNotebooksInput";
import { UserCreateWithoutNotebooksInput } from "../inputs/UserCreateWithoutNotebooksInput";
import { UserUpdateWithoutNotebooksInput } from "../inputs/UserUpdateWithoutNotebooksInput";
import { UserUpsertWithoutNotebooksInput } from "../inputs/UserUpsertWithoutNotebooksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutNotebooksInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutNotebooksInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutNotebooksInput, {
    nullable: true,
  })
  create?: UserCreateWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutNotebooksInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutNotebooksInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutNotebooksInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutNotebooksInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutNotebooksInput | undefined;
}
