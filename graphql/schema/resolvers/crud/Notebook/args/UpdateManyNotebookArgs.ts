import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateManyMutationInput } from "../../../inputs/NotebookUpdateManyMutationInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNotebookArgs {
  @TypeGraphQL.Field(() => NotebookUpdateManyMutationInput, { nullable: false })
  data!: NotebookUpdateManyMutationInput;

  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  where?: NotebookWhereInput | undefined;
}
