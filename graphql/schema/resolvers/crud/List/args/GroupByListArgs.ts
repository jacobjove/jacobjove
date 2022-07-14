import * as TypeGraphQL from "type-graphql";
import { ListScalarFieldEnum } from "../../../../enums/ListScalarFieldEnum";
import { ListOrderByWithAggregationInput } from "../../../inputs/ListOrderByWithAggregationInput";
import { ListScalarWhereWithAggregatesInput } from "../../../inputs/ListScalarWhereWithAggregatesInput";
import { ListWhereInput } from "../../../inputs/ListWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByListArgs {
  @TypeGraphQL.Field((_type) => ListWhereInput, {
    nullable: true,
  })
  where?: ListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ListOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ListOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ListScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "ownerId"
    | "name"
    | "slug"
    | "description"
    | "fields"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ListScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ListScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
