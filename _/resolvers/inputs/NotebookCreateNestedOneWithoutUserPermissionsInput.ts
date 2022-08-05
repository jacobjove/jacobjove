import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateOrConnectWithoutUserPermissionsInput } from "../inputs/NotebookCreateOrConnectWithoutUserPermissionsInput";
import { NotebookCreateWithoutUserPermissionsInput } from "../inputs/NotebookCreateWithoutUserPermissionsInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedOneWithoutUserPermissionsInput", { isAbstract: true })
export class NotebookCreateNestedOneWithoutUserPermissionsInput {
  @TypeGraphQL.Field(() => NotebookCreateWithoutUserPermissionsInput, { nullable: true })
  create?: NotebookCreateWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookCreateOrConnectWithoutUserPermissionsInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutUserPermissionsInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: true })
  connect?: NotebookWhereUniqueInput | undefined;
}
