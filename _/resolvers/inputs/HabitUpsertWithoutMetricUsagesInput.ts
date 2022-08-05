import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitUpdateWithoutMetricUsagesInput } from "../inputs/HabitUpdateWithoutMetricUsagesInput";

@TypeGraphQL.InputType("HabitUpsertWithoutMetricUsagesInput", { isAbstract: true })
export class HabitUpsertWithoutMetricUsagesInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutMetricUsagesInput, { nullable: false })
  update!: HabitUpdateWithoutMetricUsagesInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutMetricUsagesInput, { nullable: false })
  create!: HabitCreateWithoutMetricUsagesInput;
}
