import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookWhereInput } from "../inputs/NotebookWhereInput";

@TypeGraphQL.InputType("NotebookListRelationFilter", { isAbstract: true })
export class NotebookListRelationFilter {
  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  every?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  some?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereInput, { nullable: true })
  none?: NotebookWhereInput | undefined;
}
