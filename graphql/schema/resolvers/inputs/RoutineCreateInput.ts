import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { RoutineHabitCreateNestedManyWithoutRoutineInput } from "../inputs/RoutineHabitCreateNestedManyWithoutRoutineInput";

@TypeGraphQL.InputType("RoutineCreateInput", {
  isAbstract: true,
})
export class RoutineCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateNestedManyWithoutRoutineInput, { nullable: true })
  habits?: RoutineHabitCreateNestedManyWithoutRoutineInput | undefined;
}
