import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategorizationWhereInput", { isAbstract: true })
export class CategorizationWhereInput {
  @TypeGraphQL.Field(() => [CategorizationWhereInput], { nullable: true })
  AND?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereInput], { nullable: true })
  OR?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationWhereInput], { nullable: true })
  NOT?: CategorizationWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  categoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => CategoryRelationFilter, { nullable: true })
  category?: CategoryRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  act?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
