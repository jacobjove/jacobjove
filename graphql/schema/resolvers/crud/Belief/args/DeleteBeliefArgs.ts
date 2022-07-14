import * as TypeGraphQL from "type-graphql";
import { BeliefWhereUniqueInput } from "../../../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereUniqueInput, {
    nullable: false,
  })
  where!: BeliefWhereUniqueInput;
}
