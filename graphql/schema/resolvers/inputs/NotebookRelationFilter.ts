import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookWhereInput } from "../inputs/NotebookWhereInput";

@TypeGraphQL.InputType("NotebookRelationFilter", {
  isAbstract: true,
})
export class NotebookRelationFilter {
  @TypeGraphQL.Field((_type) => NotebookWhereInput, { nullable: true })
  is?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereInput, { nullable: true })
  isNot?: NotebookWhereInput | undefined;
}
