import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BoolFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class BoolFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  set?: boolean | undefined;
}
