import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NullableBoolFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableBoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  set?: boolean | undefined;
}
