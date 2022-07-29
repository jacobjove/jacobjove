import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ShelvingListRelationFilter } from "../inputs/ShelvingListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("BookshelfWhereInput", {
  isAbstract: true,
})
export class BookshelfWhereInput {
  @TypeGraphQL.Field(() => [BookshelfWhereInput], { nullable: true })
  AND?: BookshelfWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereInput], { nullable: true })
  OR?: BookshelfWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfWhereInput], { nullable: true })
  NOT?: BookshelfWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => UserRelationFilter, { nullable: true })
  owner?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  ownerId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => ShelvingListRelationFilter, { nullable: true })
  shelvings?: ShelvingListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
