import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNotebookArgs {
  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  where?: NotebookWhereInput | undefined;
}
