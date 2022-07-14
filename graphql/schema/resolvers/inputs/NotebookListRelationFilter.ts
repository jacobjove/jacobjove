import * as TypeGraphQL from "type-graphql";
import { NotebookWhereInput } from "../inputs/NotebookWhereInput";

@TypeGraphQL.InputType("NotebookListRelationFilter", {
  isAbstract: true,
})
export class NotebookListRelationFilter {
  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  every?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  some?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  none?: NotebookWhereInput | undefined;
}
