import * as TypeGraphQL from "type-graphql";
import { RoutineCreateInput } from "../../../inputs/RoutineCreateInput";
import { RoutineUpdateInput } from "../../../inputs/RoutineUpdateInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineCreateInput, {
    nullable: false,
  })
  create!: RoutineCreateInput;

  @TypeGraphQL.Field((_type) => RoutineUpdateInput, {
    nullable: false,
  })
  update!: RoutineUpdateInput;
}
