import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MantraScalarWhereInput", {
  isAbstract: true,
})
export class MantraScalarWhereInput {
  @TypeGraphQL.Field((_type) => [MantraScalarWhereInput], {
    nullable: true,
  })
  AND?: MantraScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarWhereInput], {
    nullable: true,
  })
  OR?: MantraScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MantraScalarWhereInput], {
    nullable: true,
  })
  NOT?: MantraScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  mantraId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  content?: StringFilter | undefined;

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
