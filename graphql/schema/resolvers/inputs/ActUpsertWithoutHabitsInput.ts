import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutHabitsInput } from "../inputs/ActCreateWithoutHabitsInput";
import { ActUpdateWithoutHabitsInput } from "../inputs/ActUpdateWithoutHabitsInput";

@TypeGraphQL.InputType("ActUpsertWithoutHabitsInput", {
  isAbstract: true,
})
export class ActUpsertWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => ActUpdateWithoutHabitsInput, { nullable: false })
  update!: ActUpdateWithoutHabitsInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutHabitsInput, { nullable: false })
  create!: ActCreateWithoutHabitsInput;
}
