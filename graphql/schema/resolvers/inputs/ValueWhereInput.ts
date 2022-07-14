import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ValueWhereInput", {
  isAbstract: true,
})
export class ValueWhereInput {
  @TypeGraphQL.Field((_type) => [ValueWhereInput], {
    nullable: true,
  })
  AND?: ValueWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereInput], {
    nullable: true,
  })
  OR?: ValueWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ValueWhereInput], {
    nullable: true,
  })
  NOT?: ValueWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableFilter | undefined;
}
