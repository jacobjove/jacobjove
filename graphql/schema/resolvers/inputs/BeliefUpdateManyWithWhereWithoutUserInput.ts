import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefScalarWhereInput } from "../inputs/BeliefScalarWhereInput";
import { BeliefUpdateManyMutationInput } from "../inputs/BeliefUpdateManyMutationInput";

@TypeGraphQL.InputType("BeliefUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class BeliefUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => BeliefScalarWhereInput, { nullable: false })
  where!: BeliefScalarWhereInput;

  @TypeGraphQL.Field(() => BeliefUpdateManyMutationInput, { nullable: false })
  data!: BeliefUpdateManyMutationInput;
}
