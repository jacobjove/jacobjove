import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookScalarWhereInput } from "../inputs/NotebookScalarWhereInput";
import { NotebookUpdateManyMutationInput } from "../inputs/NotebookUpdateManyMutationInput";

@TypeGraphQL.InputType("NotebookUpdateManyWithWhereWithoutOwnerInput", { isAbstract: true })
export class NotebookUpdateManyWithWhereWithoutOwnerInput {
  @TypeGraphQL.Field(() => NotebookScalarWhereInput, { nullable: false })
  where!: NotebookScalarWhereInput;

  @TypeGraphQL.Field(() => NotebookUpdateManyMutationInput, { nullable: false })
  data!: NotebookUpdateManyMutationInput;
}
