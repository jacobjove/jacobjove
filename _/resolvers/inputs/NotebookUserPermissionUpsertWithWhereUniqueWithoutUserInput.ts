import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionUpdateWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: false })
  where!: NotebookUserPermissionWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateWithoutUserInput, { nullable: false })
  update!: NotebookUserPermissionUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateWithoutUserInput, { nullable: false })
  create!: NotebookUserPermissionCreateWithoutUserInput;
}
