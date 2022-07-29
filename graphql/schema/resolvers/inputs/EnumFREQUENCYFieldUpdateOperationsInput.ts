import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("EnumFREQUENCYFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class EnumFREQUENCYFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => FREQUENCY, { nullable: true })
  set?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;
}
