import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { NestedDateTimeNullableFilter } from "../inputs/NestedDateTimeNullableFilter";

@TypeGraphQL.InputType("DateTimeNullableFilter", {
  isAbstract: true,
})
export class DateTimeNullableFilter {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  equals?: Date | undefined;

  @TypeGraphQL.Field((_type) => [Date], {
    nullable: true,
  })
  in?: Date[] | undefined;

  @TypeGraphQL.Field((_type) => [Date], {
    nullable: true,
  })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  lt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  lte?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  gt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  gte?: Date | undefined;

  @TypeGraphQL.Field((_type) => NestedDateTimeNullableFilter, {
    nullable: true,
  })
  not?: NestedDateTimeNullableFilter | undefined;
}
