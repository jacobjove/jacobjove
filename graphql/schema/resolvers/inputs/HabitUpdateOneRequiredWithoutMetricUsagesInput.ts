import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutMetricUsagesInput } from "../inputs/HabitCreateOrConnectWithoutMetricUsagesInput";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitUpdateWithoutMetricUsagesInput } from "../inputs/HabitUpdateWithoutMetricUsagesInput";
import { HabitUpsertWithoutMetricUsagesInput } from "../inputs/HabitUpsertWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitUpdateOneRequiredWithoutMetricUsagesInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutMetricUsagesInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutMetricUsagesInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutMetricUsagesInput, {
    nullable: true,
  })
  upsert?: HabitUpsertWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutMetricUsagesInput, {
    nullable: true,
  })
  update?: HabitUpdateWithoutMetricUsagesInput | undefined;
}
