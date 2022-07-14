import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitUpdateWithoutMetricUsagesInput } from "../inputs/HabitUpdateWithoutMetricUsagesInput";

@TypeGraphQL.InputType("HabitUpsertWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutMetricUsagesInput {
  @TypeGraphQL.Field((_type) => HabitUpdateWithoutMetricUsagesInput, {
    nullable: false,
  })
  update!: HabitUpdateWithoutMetricUsagesInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutMetricUsagesInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutMetricUsagesInput;
}
