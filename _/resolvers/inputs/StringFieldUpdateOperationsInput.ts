import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("StringFieldUpdateOperationsInput", { isAbstract: true })
export class StringFieldUpdateOperationsInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}
