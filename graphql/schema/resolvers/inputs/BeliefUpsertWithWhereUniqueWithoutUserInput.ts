import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefUpdateWithoutUserInput } from "../inputs/BeliefUpdateWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BeliefUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BeliefUpdateWithoutUserInput, { nullable: false })
  update!: BeliefUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => BeliefCreateWithoutUserInput, { nullable: false })
  create!: BeliefCreateWithoutUserInput;
}
