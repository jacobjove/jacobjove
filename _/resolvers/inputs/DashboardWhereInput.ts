import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DashboardWhereInput", { isAbstract: true })
export class DashboardWhereInput {
  @TypeGraphQL.Field(() => [DashboardWhereInput], { nullable: true })
  AND?: DashboardWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereInput], { nullable: true })
  OR?: DashboardWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereInput], { nullable: true })
  NOT?: DashboardWhereInput[] | undefined;

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
