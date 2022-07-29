import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CategorizationScalarWhereInput", {
  isAbstract: true,
})
export class CategorizationScalarWhereInput {
  @TypeGraphQL.Field(() => [CategorizationScalarWhereInput], { nullable: true })
  AND?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereInput], { nullable: true })
  OR?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [CategorizationScalarWhereInput], { nullable: true })
  NOT?: CategorizationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  categoryId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  actId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
