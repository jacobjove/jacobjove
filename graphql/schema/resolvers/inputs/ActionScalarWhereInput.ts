import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActionScalarWhereInput", {
  isAbstract: true,
})
export class ActionScalarWhereInput {
  @TypeGraphQL.Field(() => [ActionScalarWhereInput], { nullable: true })
  AND?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScalarWhereInput], { nullable: true })
  OR?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScalarWhereInput], { nullable: true })
  NOT?: ActionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  start?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  end?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
