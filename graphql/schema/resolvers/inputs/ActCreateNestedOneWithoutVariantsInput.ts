import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutVariantsInput } from "../inputs/ActCreateOrConnectWithoutVariantsInput";
import { ActCreateWithoutVariantsInput } from "../inputs/ActCreateWithoutVariantsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutVariantsInput", {
  isAbstract: true,
})
export class ActCreateNestedOneWithoutVariantsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutVariantsInput, {
    nullable: true,
  })
  create?: ActCreateWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutVariantsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;
}
