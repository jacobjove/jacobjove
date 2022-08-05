import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { RoutineHabitCreateNestedManyWithoutRoutineInput } from "../inputs/RoutineHabitCreateNestedManyWithoutRoutineInput";

@TypeGraphQL.InputType("RoutineCreateInput", { isAbstract: true })
export class RoutineCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateNestedManyWithoutRoutineInput, { nullable: true })
  habits?: RoutineHabitCreateNestedManyWithoutRoutineInput | undefined;
}
