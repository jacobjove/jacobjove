import * as TypeGraphQL from "type-graphql-v2-fork";
import { QueryMode } from "../../enums/QueryMode";
import { NestedStringFilter } from "../inputs/NestedStringFilter";

@TypeGraphQL.InputType("StringFilter", { isAbstract: true })
export class StringFilter {
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

  @TypeGraphQL.Field(() => NestedStringFilter, { nullable: true })
  not?: NestedStringFilter | undefined;
}
