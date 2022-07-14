import * as TypeGraphQL from "type-graphql";
import { NotebookCreateManyInput } from "../../../inputs/NotebookCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNotebookArgs {
  @TypeGraphQL.Field((_type) => [NotebookCreateManyInput], {
    nullable: false,
  })
  data!: NotebookCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
