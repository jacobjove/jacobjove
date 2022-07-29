import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { NestedEnumFREQUENCYFilter } from "../inputs/NestedEnumFREQUENCYFilter";

@TypeGraphQL.InputType("EnumFREQUENCYFilter", {
  isAbstract: true,
})
export class EnumFREQUENCYFilter {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  equals?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => [FREQUENCY], { nullable: true })
  in?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field(() => [FREQUENCY], { nullable: true })
  notIn?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field(() => NestedEnumFREQUENCYFilter, { nullable: true })
  not?: NestedEnumFREQUENCYFilter | undefined;
}
