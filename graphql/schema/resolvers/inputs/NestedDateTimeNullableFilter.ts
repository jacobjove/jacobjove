import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedDateTimeNullableFilter", {
  isAbstract: true,
})
export class NestedDateTimeNullableFilter {
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

  @TypeGraphQL.Field((_type) => NestedDateTimeNullableFilter, { nullable: true })
  not?: NestedDateTimeNullableFilter | undefined;
}
