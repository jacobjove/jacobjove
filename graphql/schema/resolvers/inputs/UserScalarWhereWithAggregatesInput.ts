import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UserScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class UserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  uid?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  emailVerified?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  image?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => BoolWithAggregatesFilter, { nullable: true })
  isAdmin?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => JsonWithAggregatesFilter, { nullable: true })
  settings?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  lastLogin?: DateTimeNullableWithAggregatesFilter | undefined;
}
