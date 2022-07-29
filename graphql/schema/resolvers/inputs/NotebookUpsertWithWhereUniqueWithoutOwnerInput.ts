import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookUpdateWithoutOwnerInput } from "../inputs/NotebookUpdateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookUpdateWithoutOwnerInput, { nullable: false })
  update!: NotebookUpdateWithoutOwnerInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutOwnerInput, { nullable: false })
  create!: NotebookCreateWithoutOwnerInput;
}
