import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutCategorizationsInput } from "../inputs/ActCreateOrConnectWithoutCategorizationsInput";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutCategorizationsInput", {
  isAbstract: true,
})
export class ActCreateNestedOneWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutCategorizationsInput, {
    nullable: true,
  })
  create?: ActCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;
}
