import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateManyMutationInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateManyMutationInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;
}
