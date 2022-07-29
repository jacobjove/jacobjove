import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ItemScalarWhereInput", {
  isAbstract: true,
})
export class ItemScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ItemScalarWhereInput], { nullable: true })
  AND?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarWhereInput], { nullable: true })
  OR?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ItemScalarWhereInput], { nullable: true })
  NOT?: ItemScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  listId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonFilter, { nullable: true })
  data?: JsonFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
