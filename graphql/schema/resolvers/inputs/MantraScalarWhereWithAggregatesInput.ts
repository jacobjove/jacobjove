import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("MantraScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class MantraScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [MantraScalarWhereWithAggregatesInput], { nullable: true })
  AND?: MantraScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraScalarWhereWithAggregatesInput], { nullable: true })
  OR?: MantraScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: MantraScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  content?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
