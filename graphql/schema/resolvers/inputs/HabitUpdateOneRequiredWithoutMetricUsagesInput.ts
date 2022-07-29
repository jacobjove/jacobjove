import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutMetricUsagesInput } from "../inputs/HabitCreateOrConnectWithoutMetricUsagesInput";
import { HabitCreateWithoutMetricUsagesInput } from "../inputs/HabitCreateWithoutMetricUsagesInput";
import { HabitUpdateWithoutMetricUsagesInput } from "../inputs/HabitUpdateWithoutMetricUsagesInput";
import { HabitUpsertWithoutMetricUsagesInput } from "../inputs/HabitUpsertWithoutMetricUsagesInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneRequiredWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitUpdateOneRequiredWithoutMetricUsagesInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutMetricUsagesInput, { nullable: true })
  create?: HabitCreateWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutMetricUsagesInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutMetricUsagesInput, { nullable: true })
  upsert?: HabitUpsertWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutMetricUsagesInput, { nullable: true })
  update?: HabitUpdateWithoutMetricUsagesInput | undefined;
}
