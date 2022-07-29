import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NullableIntFieldUpdateOperationsInput", {
  isAbstract: true,
})
export class NullableIntFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  set?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  increment?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  decrement?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  multiply?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  divide?: number | undefined;
}
