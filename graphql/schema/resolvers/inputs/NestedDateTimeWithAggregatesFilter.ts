import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NestedDateTimeFilter } from "../inputs/NestedDateTimeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("NestedDateTimeWithAggregatesFilter", {
  isAbstract: true,
})
export class NestedDateTimeWithAggregatesFilter {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  equals?: Date | undefined;

  @TypeGraphQL.Field(() => [Date], { nullable: true })
  in?: Date[] | undefined;

  @TypeGraphQL.Field(() => [Date], { nullable: true })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lte?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  gt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  gte?: Date | undefined;

  @TypeGraphQL.Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: NestedDateTimeFilter | undefined;

  @TypeGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: NestedDateTimeFilter | undefined;
}
