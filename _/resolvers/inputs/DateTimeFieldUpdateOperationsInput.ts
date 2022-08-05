import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("DateTimeFieldUpdateOperationsInput", { isAbstract: true })
export class DateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  set?: Date | undefined;
}
