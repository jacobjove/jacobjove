import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutMetricUsagesInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutMetricUsagesInput, { nullable: false })
  create!: HabitCreateWithoutMetricUsagesInput;
}
