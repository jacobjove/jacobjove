import * as TypeGraphQL from "type-graphql";
import { NotebookCreateOrConnectWithoutUserPermissionsInput } from "../inputs/NotebookCreateOrConnectWithoutUserPermissionsInput";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookUpdateWithoutUserPermissionsInput } from "../inputs/NotebookUpdateWithoutUserPermissionsInput";
import { NotebookUpsertWithoutUserPermissionsInput } from "../inputs/NotebookUpsertWithoutUserPermissionsInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateOneRequiredWithoutUserPermissionsInput", {
  isAbstract: true,
})
export class NotebookUpdateOneRequiredWithoutUserPermissionsInput {
  @TypeGraphQL.Field((_type) => NotebookCreateWithoutUserPermissionsInput, {
    nullable: true,
  })
  create?: NotebookCreateWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateOrConnectWithoutUserPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpsertWithoutUserPermissionsInput, {
    nullable: true,
  })
  upsert?: NotebookUpsertWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: true,
  })
  connect?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutUserPermissionsInput, {
    nullable: true,
  })
  update?: NotebookUpdateWithoutUserPermissionsInput | undefined;
}
