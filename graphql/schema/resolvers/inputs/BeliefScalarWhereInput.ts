import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("BeliefScalarWhereInput", {
  isAbstract: true,
})
export class BeliefScalarWhereInput {
  @TypeGraphQL.Field(() => [BeliefScalarWhereInput], { nullable: true })
  AND?: BeliefScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefScalarWhereInput], { nullable: true })
  OR?: BeliefScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefScalarWhereInput], { nullable: true })
  NOT?: BeliefScalarWhereInput[] | undefined;

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
