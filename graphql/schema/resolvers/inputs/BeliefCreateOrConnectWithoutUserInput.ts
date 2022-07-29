import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class BeliefCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BeliefCreateWithoutUserInput, { nullable: false })
  create!: BeliefCreateWithoutUserInput;
}
