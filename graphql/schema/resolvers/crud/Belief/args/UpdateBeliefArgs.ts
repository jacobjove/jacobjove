import * as TypeGraphQL from "type-graphql";
import { BeliefUpdateInput } from "../../../inputs/BeliefUpdateInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefUpdateInput, {
    nullable: false,
  })
  data!: BeliefUpdateInput;

  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, {
    nullable: false,
  })
  where!: BeliefWhereUniqueInput;
}
