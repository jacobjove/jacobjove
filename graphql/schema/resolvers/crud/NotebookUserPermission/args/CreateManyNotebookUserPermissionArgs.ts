import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateManyInput } from "../../../inputs/NotebookUserPermissionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateManyInput], {
    nullable: false,
  })
  data!: NotebookUserPermissionCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
