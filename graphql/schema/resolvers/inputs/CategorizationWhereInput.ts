import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategorizationWhereInput", {
  isAbstract: true,
})
export class CategorizationWhereInput {
  @TypeGraphQL.Field((_type) => [CategorizationWhereInput], { nullable: true })
  AND?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereInput], { nullable: true })
  OR?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationWhereInput], { nullable: true })
  NOT?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  categoryId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => CategoryRelationFilter, { nullable: true })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
