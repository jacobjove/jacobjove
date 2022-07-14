import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("NestedEnumFREQUENCYFilter", {
  isAbstract: true,
})
export class NestedEnumFREQUENCYFilter {
  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: true,
  })
  equals?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => [FREQUENCY], {
    nullable: true,
  })
  in?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field((_type) => [FREQUENCY], {
    nullable: true,
  })
  notIn?: Array<"MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR"> | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumFREQUENCYFilter, {
    nullable: true,
  })
  not?: NestedEnumFREQUENCYFilter | undefined;
}
