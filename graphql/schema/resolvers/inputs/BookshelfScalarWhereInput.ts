import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("BookshelfScalarWhereInput", {
  isAbstract: true,
})
export class BookshelfScalarWhereInput {
  @TypeGraphQL.Field(() => [BookshelfScalarWhereInput], { nullable: true })
  AND?: BookshelfScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfScalarWhereInput], { nullable: true })
  OR?: BookshelfScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BookshelfScalarWhereInput], { nullable: true })
  NOT?: BookshelfScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

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

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
