import * as TypeGraphQL from "type-graphql";
import { RoutineHabitUpdateManyMutationInput } from "../../../inputs/RoutineHabitUpdateManyMutationInput";
import { RoutineHabitWhereInput } from "../../../inputs/RoutineHabitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoutineHabitArgs {
  @TypeGraphQL.Field((_type) => RoutineHabitUpdateManyMutationInput, {
    nullable: false,
  })
  data!: RoutineHabitUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => RoutineHabitWhereInput, {
    nullable: true,
  })
  where?: RoutineHabitWhereInput | undefined;
}
