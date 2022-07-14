import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BoolFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class BoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  set?: boolean | undefined;
}
