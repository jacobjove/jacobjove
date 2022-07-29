import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefUpdateInput } from "../../../inputs/BeliefUpdateInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateBeliefArgs {
  @TypeGraphQL.Field(() => BeliefUpdateInput, { nullable: false })
  data!: BeliefUpdateInput;

  @TypeGraphQL.Field(() => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;
}
