import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutVariantsInput } from "../inputs/ActCreateWithoutVariantsInput";
import { ActUpdateWithoutVariantsInput } from "../inputs/ActUpdateWithoutVariantsInput";

@TypeGraphQL.InputType("ActUpsertWithoutVariantsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutVariantsInput {
  @TypeGraphQL.Field(() => ActUpdateWithoutVariantsInput, { nullable: false })
  update!: ActUpdateWithoutVariantsInput;

  @TypeGraphQL.Field(() => ActCreateWithoutVariantsInput, { nullable: false })
  create!: ActCreateWithoutVariantsInput;
}
