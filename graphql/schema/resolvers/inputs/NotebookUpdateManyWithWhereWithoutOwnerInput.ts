import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookScalarWhereInput } from "../inputs/NotebookScalarWhereInput";
import { NotebookUpdateManyMutationInput } from "../inputs/NotebookUpdateManyMutationInput";

@TypeGraphQL.InputType("NotebookUpdateManyWithWhereWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => NotebookScalarWhereInput, { nullable: false })
  where!: NotebookScalarWhereInput;

  @TypeGraphQL.Field((_type) => NotebookUpdateManyMutationInput, { nullable: false })
  data!: NotebookUpdateManyMutationInput;
}
