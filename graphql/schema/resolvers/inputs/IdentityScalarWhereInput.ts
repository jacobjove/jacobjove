import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IdentityScalarWhereInput", {
  isAbstract: true,
})
export class IdentityScalarWhereInput {
  @TypeGraphQL.Field(() => [IdentityScalarWhereInput], { nullable: true })
  AND?: IdentityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityScalarWhereInput], { nullable: true })
  OR?: IdentityScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [IdentityScalarWhereInput], { nullable: true })
  NOT?: IdentityScalarWhereInput[] | undefined;

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
