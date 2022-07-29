import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateInput } from "../../../inputs/BeliefCreateInput";
import { BeliefUpdateInput } from "../../../inputs/BeliefUpdateInput";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BeliefCreateInput, { nullable: false })
  create!: BeliefCreateInput;

  @TypeGraphQL.Field((_type) => BeliefUpdateInput, { nullable: false })
  update!: BeliefUpdateInput;
}
