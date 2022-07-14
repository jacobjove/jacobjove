import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutTasksInput } from "../inputs/HabitCreateOrConnectWithoutTasksInput";
import { HabitCreateWithoutTasksInput } from "../inputs/HabitCreateWithoutTasksInput";
import { HabitUpdateWithoutTasksInput } from "../inputs/HabitUpdateWithoutTasksInput";
import { HabitUpsertWithoutTasksInput } from "../inputs/HabitUpsertWithoutTasksInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutTasksInput", {
  isAbstract: true,
})
export class HabitUpdateOneWithoutTasksInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutTasksInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutTasksInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutTasksInput, {
    nullable: true,
  })
  upsert?: HabitUpsertWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutTasksInput, {
    nullable: true,
  })
  update?: HabitUpdateWithoutTasksInput | undefined;
}
