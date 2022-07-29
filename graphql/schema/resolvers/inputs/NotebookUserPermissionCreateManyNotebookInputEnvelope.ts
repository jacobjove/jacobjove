import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyNotebookInput } from "../inputs/NotebookUserPermissionCreateManyNotebookInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateManyNotebookInputEnvelope", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateManyNotebookInputEnvelope {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateManyNotebookInput], {
    nullable: false,
  })
  data!: NotebookUserPermissionCreateManyNotebookInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
