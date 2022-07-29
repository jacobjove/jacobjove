import * as TypeGraphQL from "type-graphql-v2-fork";
import { QueryMode } from "../../enums/QueryMode";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";

@TypeGraphQL.InputType("StringWithAggregatesFilter", {
  isAbstract: true,
})
export class StringWithAggregatesFilter {
  @TypeGraphQL.Field(() => String, { nullable: true })
  equals?: string | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  in?: string[] | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  notIn?: string[] | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  lt?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  lte?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  gt?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  gte?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  contains?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  startsWith?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  endsWith?: string | undefined;

  @TypeGraphQL.Field(() => QueryMode, { nullable: true })
  mode?: "default" | "insensitive" | undefined;

  @TypeGraphQL.Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: NestedStringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _min?: NestedStringFilter | undefined;

  @TypeGraphQL.Field(() => NestedStringFilter, { nullable: true })
  _max?: NestedStringFilter | undefined;
}
