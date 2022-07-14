import * as TypeGraphQL from "type-graphql";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IdentityActRelationScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class IdentityActRelationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: IdentityActRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  identityId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  actionId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, {
    nullable: true,
  })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
