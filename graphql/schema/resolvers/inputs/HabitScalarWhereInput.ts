import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("HabitScalarWhereInput", {
  isAbstract: true,
})
export class HabitScalarWhereInput {
  @TypeGraphQL.Field(() => [HabitScalarWhereInput], { nullable: true })
  AND?: HabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitScalarWhereInput], { nullable: true })
  OR?: HabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitScalarWhereInput], { nullable: true })
  NOT?: HabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableFilter, { nullable: true })
  defaultDurationInMinutes?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
