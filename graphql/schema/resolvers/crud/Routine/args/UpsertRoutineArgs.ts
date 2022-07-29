import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateInput } from "../../../inputs/RoutineCreateInput";
import { RoutineUpdateInput } from "../../../inputs/RoutineUpdateInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRoutineArgs {
  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: false })
  where!: RoutineWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineCreateInput, { nullable: false })
  create!: RoutineCreateInput;

  @TypeGraphQL.Field(() => RoutineUpdateInput, { nullable: false })
  update!: RoutineUpdateInput;
}
