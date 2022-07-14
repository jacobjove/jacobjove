import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutMetricUsagesInput } from "../inputs/HabitCreateOrConnectWithoutMetricUsagesInput";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutMetricUsagesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutMetricUsagesInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutMetricUsagesInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;
}
