import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("NullableBoolFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableBoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  set?: boolean | undefined;
}
