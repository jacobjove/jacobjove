import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyInput } from "../../../inputs/NotebookUserPermissionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateManyInput], { nullable: false })
  data!: NotebookUserPermissionCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
