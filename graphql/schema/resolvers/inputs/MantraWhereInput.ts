import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MantraWhereInput", {
  isAbstract: true,
})
export class MantraWhereInput {
  @TypeGraphQL.Field((_type) => [MantraWhereInput], { nullable: true })
  AND?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereInput], { nullable: true })
  OR?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraWhereInput], { nullable: true })
  NOT?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
