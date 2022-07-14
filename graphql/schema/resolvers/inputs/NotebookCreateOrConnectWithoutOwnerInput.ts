import * as TypeGraphQL from "type-graphql";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateOrConnectWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutOwnerInput, {
    nullable: false,
  })
  create!: NotebookCreateWithoutOwnerInput;
}
