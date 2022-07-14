import * as TypeGraphQL from "type-graphql";
import { NotebookUpdateManyMutationInput } from "../../../inputs/NotebookUpdateManyMutationInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookUpdateManyMutationInput, {
    nullable: false,
  })
  data!: NotebookUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  where?: NotebookWhereInput | undefined;
}
