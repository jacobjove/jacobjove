import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateWithoutOwnerInput } from "../inputs/NotebookUpdateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookUpdateWithoutOwnerInput, { nullable: false })
  data!: NotebookUpdateWithoutOwnerInput;
}
