import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReadingScalarWhereInput", {
  isAbstract: true,
})
export class ReadingScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ReadingScalarWhereInput], {
    nullable: true,
  })
  AND?: ReadingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarWhereInput], {
    nullable: true,
  })
  OR?: ReadingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ReadingScalarWhereInput], {
    nullable: true,
  })
  NOT?: ReadingScalarWhereInput[] | undefined;

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
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  dateStarted?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  dateFinished?: DateTimeNullableFilter | undefined;

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
