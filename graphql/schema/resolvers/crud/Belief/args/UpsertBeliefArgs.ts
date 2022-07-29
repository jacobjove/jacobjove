import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateInput } from "../../../inputs/BeliefCreateInput";
import { BeliefUpdateInput } from "../../../inputs/BeliefUpdateInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBeliefArgs {
  @TypeGraphQL.Field(() => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;

  @TypeGraphQL.Field(() => BeliefCreateInput, { nullable: false })
  create!: BeliefCreateInput;

  @TypeGraphQL.Field(() => BeliefUpdateInput, { nullable: false })
  update!: BeliefUpdateInput;
}
