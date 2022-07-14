import * as TypeGraphQL from "type-graphql";
import { NotebookScalarFieldEnum } from "../../../../enums/NotebookScalarFieldEnum";
import { NotebookOrderByWithAggregationInput } from "../../../inputs/NotebookOrderByWithAggregationInput";
import { NotebookScalarWhereWithAggregatesInput } from "../../../inputs/NotebookScalarWhereWithAggregatesInput";
import { NotebookWhereInput } from "../../../inputs/NotebookWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereInput, {
    nullable: true,
  })
  where?: NotebookWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [NotebookOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: NotebookOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "ownerId"
    | "title"
    | "isPublic"
    | "description"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => NotebookScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: NotebookScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
