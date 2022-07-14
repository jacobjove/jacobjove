import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutMetricUsagesInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutMetricUsagesInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutMetricUsagesInput;
}
