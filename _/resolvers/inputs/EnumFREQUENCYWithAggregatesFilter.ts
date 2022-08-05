import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { NestedEnumFREQUENCYFilter } from "../inputs/NestedEnumFREQUENCYFilter";
import { NestedEnumFREQUENCYWithAggregatesFilter } from "../inputs/NestedEnumFREQUENCYWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";

@TypeGraphQL.InputType("EnumFREQUENCYWithAggregatesFilter", { isAbstract: true })
export class EnumFREQUENCYWithAggregatesFilter {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  equals?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => [FREQUENCY], { nullable: true })
  in?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field(() => [FREQUENCY], { nullable: true })
  notIn?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field(() => NestedEnumFREQUENCYWithAggregatesFilter, { nullable: true })
  not?: NestedEnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => NestedIntFilter, { nullable: true })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(() => NestedEnumFREQUENCYFilter, { nullable: true })
  _min?: NestedEnumFREQUENCYFilter | undefined;

  @TypeGraphQL.Field(() => NestedEnumFREQUENCYFilter, { nullable: true })
  _max?: NestedEnumFREQUENCYFilter | undefined;
}
