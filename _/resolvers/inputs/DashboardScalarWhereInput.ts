import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DashboardScalarWhereInput", { isAbstract: true })
export class DashboardScalarWhereInput {
  @TypeGraphQL.Field(() => [DashboardScalarWhereInput], { nullable: true })
  AND?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardScalarWhereInput], { nullable: true })
  OR?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardScalarWhereInput], { nullable: true })
  NOT?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => JsonFilter, { nullable: true })
  layouts?: JsonFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isDefault?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  public?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
