import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("NullableDateTimeFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableDateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  set?: Date | undefined;
}
