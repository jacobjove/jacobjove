import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateOrConnectWithoutUserPermissionsInput } from "../inputs/NotebookCreateOrConnectWithoutUserPermissionsInput";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookUpdateWithoutUserPermissionsInput } from "../inputs/NotebookUpdateWithoutUserPermissionsInput";
import { NotebookUpsertWithoutUserPermissionsInput } from "../inputs/NotebookUpsertWithoutUserPermissionsInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateOneRequiredWithoutUserPermissionsInput", { isAbstract: true })
export class NotebookUpdateOneRequiredWithoutUserPermissionsInput {
  @TypeGraphQL.Field(() => NotebookCreateWithoutUserPermissionsInput, { nullable: true })
  create?: NotebookCreateWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookCreateOrConnectWithoutUserPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpsertWithoutUserPermissionsInput, { nullable: true })
  upsert?: NotebookUpsertWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: true })
  connect?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => NotebookUpdateWithoutUserPermissionsInput, { nullable: true })
  update?: NotebookUpdateWithoutUserPermissionsInput | undefined;
}
