import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategorizationScalarWhereInput", {
  isAbstract: true,
})
export class CategorizationScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereInput], { nullable: true })
  AND?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereInput], { nullable: true })
  OR?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategorizationScalarWhereInput], { nullable: true })
  NOT?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  categoryId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
