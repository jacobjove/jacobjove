import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookOrderByWithRelationInput } from "../../../inputs/NotebookOrderByWithRelationInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereInput, { nullable: true })
  where?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NotebookOrderByWithRelationInput], { nullable: true })
  orderBy?: NotebookOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, { nullable: true })
  cursor?: NotebookWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
