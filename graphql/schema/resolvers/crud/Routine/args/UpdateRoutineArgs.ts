import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineUpdateInput } from "../../../inputs/RoutineUpdateInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRoutineArgs {
  @TypeGraphQL.Field(() => RoutineUpdateInput, { nullable: false })
  data!: RoutineUpdateInput;

  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: false })
  where!: RoutineWhereUniqueInput;
}
