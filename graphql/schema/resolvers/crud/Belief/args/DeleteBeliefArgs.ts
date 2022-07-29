import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBeliefArgs {
  @TypeGraphQL.Field(() => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;
}
