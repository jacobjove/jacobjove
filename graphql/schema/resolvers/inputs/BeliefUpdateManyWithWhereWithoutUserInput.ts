import * as TypeGraphQL from "type-graphql";
import { BeliefScalarWhereInput } from "../inputs/BeliefScalarWhereInput";
import { BeliefUpdateManyMutationInput } from "../inputs/BeliefUpdateManyMutationInput";

@TypeGraphQL.InputType("BeliefUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class BeliefUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => BeliefScalarWhereInput, {
    nullable: false,
  })
  where!: BeliefScalarWhereInput;

  @TypeGraphQL.Field((_type) => BeliefUpdateManyMutationInput, {
    nullable: false,
  })
  data!: BeliefUpdateManyMutationInput;
}
