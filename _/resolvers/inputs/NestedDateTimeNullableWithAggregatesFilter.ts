import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@TypeGraphQL.InputType("NestedDateTimeNullableWithAggregatesFilter", { isAbstract: true })
export class NestedDateTimeNullableWithAggregatesFilter {
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

  @TypeGraphQL.Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: NestedDateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: NestedIntNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: NestedDateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: NestedDateTimeNullableFilter | undefined;
}
