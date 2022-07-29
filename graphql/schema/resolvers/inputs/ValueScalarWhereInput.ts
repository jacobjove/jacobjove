import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ValueScalarWhereInput", {
  isAbstract: true,
})
export class ValueScalarWhereInput {
  @TypeGraphQL.Field(() => [ValueScalarWhereInput], { nullable: true })
  AND?: ValueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueScalarWhereInput], { nullable: true })
  OR?: ValueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ValueScalarWhereInput], { nullable: true })
  NOT?: ValueScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  mantraId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
