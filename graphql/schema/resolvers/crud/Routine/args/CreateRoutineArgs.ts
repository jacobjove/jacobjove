import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateInput } from "../../../inputs/RoutineCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRoutineArgs {
  @TypeGraphQL.Field(() => RoutineCreateInput, { nullable: false })
  data!: RoutineCreateInput;
}
