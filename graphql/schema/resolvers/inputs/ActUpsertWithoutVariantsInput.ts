import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutVariantsInput } from "../inputs/ActCreateWithoutVariantsInput";
import { ActUpdateWithoutVariantsInput } from "../inputs/ActUpdateWithoutVariantsInput";

@TypeGraphQL.InputType("ActUpsertWithoutVariantsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutVariantsInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutVariantsInput, { nullable: false })
  update!: ActUpdateWithoutVariantsInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutVariantsInput, { nullable: false })
  create!: ActCreateWithoutVariantsInput;
}
