import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateManyMutationInput", { isAbstract: true })
export class ScheduleTemplateUpdateManyMutationInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  chron?: string | null | undefined;
}
