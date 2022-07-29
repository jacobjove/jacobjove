import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutMetricUsagesInput } from "../inputs/HabitCreateOrConnectWithoutMetricUsagesInput";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutMetricUsagesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutMetricUsagesInput, { nullable: true })
  create?: HabitCreateWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutMetricUsagesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
