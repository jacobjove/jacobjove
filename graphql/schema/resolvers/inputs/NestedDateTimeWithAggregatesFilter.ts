import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("NestedDateTimeWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedDateTimeWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  equals?: Date | undefined;

  @TypeGraphQL.Field((_type) => [Date], { nullable: true })
  in?: Date[] | undefined;

  @TypeGraphQL.Field((_type) => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  lt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  lte?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  gt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  gte?: Date | undefined;

  @TypeGraphQL.Field((_type) => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedDateTimeFilter, { nullable: true })
  _min?: NestedDateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedDateTimeFilter, { nullable: true })
  _max?: NestedDateTimeFilter | undefined;
}
