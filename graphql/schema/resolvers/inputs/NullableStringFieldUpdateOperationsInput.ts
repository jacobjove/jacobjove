import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NullableStringFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableStringFieldUpdateOperationsInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  set?: string | undefined;
}
