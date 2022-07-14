import * as TypeGraphQL from "type-graphql";
import { AuthorScalarFieldEnum } from "../../../../enums/AuthorScalarFieldEnum";
import { AuthorOrderByWithAggregationInput } from "../../../inputs/AuthorOrderByWithAggregationInput";
import { AuthorScalarWhereWithAggregatesInput } from "../../../inputs/AuthorScalarWhereWithAggregatesInput";
import { AuthorWhereInput } from "../../../inputs/AuthorWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByAuthorArgs {
  @TypeGraphQL.Field((_type) => AuthorWhereInput, {
    nullable: true,
  })
  where?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AuthorOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: AuthorOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "slug" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => AuthorScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: AuthorScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
