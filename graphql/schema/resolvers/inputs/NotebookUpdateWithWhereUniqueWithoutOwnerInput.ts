import * as TypeGraphQL from "type-graphql";
import { NotebookUpdateWithoutOwnerInput } from "../inputs/NotebookUpdateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutOwnerInput, {
    nullable: false,
  })
  data!: NotebookUpdateWithoutOwnerInput;
}
