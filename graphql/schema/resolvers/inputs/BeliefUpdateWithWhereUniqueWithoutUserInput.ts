import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefUpdateWithoutUserInput } from "../inputs/BeliefUpdateWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class BeliefUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BeliefUpdateWithoutUserInput, { nullable: false })
  data!: BeliefUpdateWithoutUserInput;
}
