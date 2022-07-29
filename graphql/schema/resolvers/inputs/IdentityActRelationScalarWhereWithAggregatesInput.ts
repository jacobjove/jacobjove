import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IdentityActRelationScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class IdentityActRelationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  identityId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  actionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
