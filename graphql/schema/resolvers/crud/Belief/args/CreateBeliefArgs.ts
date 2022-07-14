import * as TypeGraphQL from "type-graphql";
import { BeliefCreateInput } from "../../../inputs/BeliefCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefCreateInput, {
    nullable: false,
  })
  data!: BeliefCreateInput;
}
