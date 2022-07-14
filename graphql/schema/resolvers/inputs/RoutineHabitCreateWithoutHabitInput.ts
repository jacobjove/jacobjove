import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { RoutineCreateNestedOneWithoutHabitsInput } from "../inputs/RoutineCreateNestedOneWithoutHabitsInput";

@TypeGraphQL.InputType("RoutineHabitCreateWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitCreateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  position!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  durationInMinutes!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => RoutineCreateNestedOneWithoutHabitsInput, {
    nullable: false,
  })
  routine!: RoutineCreateNestedOneWithoutHabitsInput;
}
