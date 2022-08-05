import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";

@TypeGraphQL.InputType("DateTimeNullableFilter", { isAbstract: true })
export class DateTimeNullableFilter {
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

  @TypeGraphQL.Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: NestedDateTimeNullableFilter | undefined;
}
