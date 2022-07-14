import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AuthorshipScalarWhereInput", {
  isAbstract: true,
})
export class AuthorshipScalarWhereInput {
  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereInput], {
    nullable: true,
  })
  AND?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereInput], {
    nullable: true,
  })
  OR?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [AuthorshipScalarWhereInput], {
    nullable: true,
  })
  NOT?: AuthorshipScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  authorId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  bookId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  position?: IntFilter | undefined;

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
