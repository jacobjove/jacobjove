import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutOwnerInput } from "../inputs/NotebookCreateWithoutOwnerInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateOrConnectWithoutOwnerInput", {
  isAbstract: true,
})
export class NotebookCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookCreateWithoutOwnerInput, { nullable: false })
  create!: NotebookCreateWithoutOwnerInput;
}
