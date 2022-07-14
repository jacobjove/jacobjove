import * as TypeGraphQL from "type-graphql";
import { ActScalarFieldEnum } from "../../../../enums/ActScalarFieldEnum";
import { ActOrderByWithAggregationInput } from "../../../inputs/ActOrderByWithAggregationInput";
import { ActScalarWhereWithAggregatesInput } from "../../../inputs/ActScalarWhereWithAggregatesInput";
import { ActWhereInput } from "../../../inputs/ActWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByActArgs {
  @TypeGraphQL.Field((_type) => ActWhereInput, {
    nullable: true,
  })
  where?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "name"
    | "slug"
    | "description"
    | "isPublic"
    | "parentId"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ActScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
