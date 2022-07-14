import * as TypeGraphQL from "type-graphql";
import { AuthorshipScalarFieldEnum } from "../../../../enums/AuthorshipScalarFieldEnum";
import { AuthorshipOrderByWithAggregationInput } from "../../../inputs/AuthorshipOrderByWithAggregationInput";
import { AuthorshipScalarWhereWithAggregatesInput } from "../../../inputs/AuthorshipScalarWhereWithAggregatesInput";
import { AuthorshipWhereInput } from "../../../inputs/AuthorshipWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByAuthorshipArgs {
  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  where?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: AuthorshipOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "authorId" | "bookId" | "position" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => AuthorshipScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: AuthorshipScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
