import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityActRelationScalarWhereInput", {
  isAbstract: true,
})
export class IdentityActRelationScalarWhereInput {
  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereInput], { nullable: true })
  AND?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereInput], { nullable: true })
  OR?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityActRelationScalarWhereInput], { nullable: true })
  NOT?: IdentityActRelationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  identityId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actionId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
