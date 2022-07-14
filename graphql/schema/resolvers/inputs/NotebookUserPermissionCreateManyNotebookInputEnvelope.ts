import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateManyNotebookInput } from "../inputs/NotebookUserPermissionCreateManyNotebookInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateManyNotebookInputEnvelope", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateManyNotebookInputEnvelope {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateManyNotebookInput], {
    nullable: false,
  })
  data!: NotebookUserPermissionCreateManyNotebookInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
