import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, { nullable: false })
  where!: BeliefWhereUniqueInput;
}
