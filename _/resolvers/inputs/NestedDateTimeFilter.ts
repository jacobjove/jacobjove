import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedDateTimeFilter", { isAbstract: true })
export class NestedDateTimeFilter {
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

  @TypeGraphQL.Field(() => NestedDateTimeFilter, { nullable: true })
  not?: NestedDateTimeFilter | undefined;
}
