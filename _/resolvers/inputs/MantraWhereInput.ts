import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MantraWhereInput", { isAbstract: true })
export class MantraWhereInput {
  @TypeGraphQL.Field(() => [MantraWhereInput], { nullable: true })
  AND?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereInput], { nullable: true })
  OR?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [MantraWhereInput], { nullable: true })
  NOT?: MantraWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
