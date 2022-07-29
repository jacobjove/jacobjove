import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategorizationListRelationFilter } from "../inputs/CategorizationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategoryWhereInput", {
  isAbstract: true,
})
export class CategoryWhereInput {
  @TypeGraphQL.Field(() => [CategoryWhereInput], { nullable: true })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategoryWhereInput], { nullable: true })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategoryWhereInput], { nullable: true })
  NOT?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => CategorizationListRelationFilter, { nullable: true })
  categorizations?: CategorizationListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
