import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookRelationFilter } from "../inputs/BookRelationFilter";
import { BookshelfRelationFilter } from "../inputs/BookshelfRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ShelvingWhereInput", { isAbstract: true })
export class ShelvingWhereInput {
  @TypeGraphQL.Field(() => [ShelvingWhereInput], { nullable: true })
  AND?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereInput], { nullable: true })
  OR?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ShelvingWhereInput], { nullable: true })
  NOT?: ShelvingWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BookRelationFilter, { nullable: true })
  book?: BookRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BookshelfRelationFilter, { nullable: true })
  shelf?: BookshelfRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  shelfId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  rationale?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
