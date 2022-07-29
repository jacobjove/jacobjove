import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@TypeGraphQL.InputType("JsonWithAggregatesFilter", {
  isAbstract: true,
})
export class JsonWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  equals?: Record<string, string> | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, { nullable: true })
  not?: Record<string, string> | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedJsonFilter, { nullable: true })
  _min?: NestedJsonFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedJsonFilter, { nullable: true })
  _max?: NestedJsonFilter | undefined;
}
