import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateInput } from "../../../inputs/BeliefCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBeliefArgs {
  @TypeGraphQL.Field(() => BeliefCreateInput, { nullable: false })
  data!: BeliefCreateInput;
}
