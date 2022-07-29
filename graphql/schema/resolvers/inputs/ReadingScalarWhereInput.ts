import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ReadingScalarWhereInput", {
  isAbstract: true,
})
export class ReadingScalarWhereInput {
  @TypeGraphQL.Field(() => [ReadingScalarWhereInput], { nullable: true })
  AND?: ReadingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingScalarWhereInput], { nullable: true })
  OR?: ReadingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ReadingScalarWhereInput], { nullable: true })
  NOT?: ReadingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  dateStarted?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  dateFinished?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
