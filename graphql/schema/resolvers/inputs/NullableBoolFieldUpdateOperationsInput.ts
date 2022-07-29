import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NullableBoolFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableBoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  set?: boolean | undefined;
}
