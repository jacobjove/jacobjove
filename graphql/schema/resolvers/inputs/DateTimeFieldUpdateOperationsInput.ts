import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("DateTimeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class DateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  set?: Date | undefined;
}
