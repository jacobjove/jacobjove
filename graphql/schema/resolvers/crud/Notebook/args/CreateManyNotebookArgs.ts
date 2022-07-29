import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateManyInput } from "../../../inputs/NotebookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNotebookArgs {
  @TypeGraphQL.Field(() => [NotebookCreateManyInput], { nullable: false })
  data!: NotebookCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
