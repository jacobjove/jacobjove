import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutRoutinesInput } from "../inputs/HabitCreateNestedOneWithoutRoutinesInput";

@TypeGraphQL.InputType("RoutineHabitCreateWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitCreateWithoutRoutineInput {
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

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutRoutinesInput, {
    nullable: false,
  })
  habit!: HabitCreateNestedOneWithoutRoutinesInput;
}
