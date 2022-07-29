import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityActRelationScalarWhereInput", {
  isAbstract: true,
})
export class IdentityActRelationScalarWhereInput {
  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereInput], { nullable: true })
  AND?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereInput], { nullable: true })
  OR?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [IdentityActRelationScalarWhereInput], { nullable: true })
  NOT?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  identityId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
