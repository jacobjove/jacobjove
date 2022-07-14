import * as TypeGraphQL from "type-graphql";
import { HabitCreateManyUserInputEnvelope } from "../inputs/HabitCreateManyUserInputEnvelope";
import { HabitCreateOrConnectWithoutUserInput } from "../inputs/HabitCreateOrConnectWithoutUserInput";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class HabitCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [HabitCreateWithoutUserInput], {
    nullable: true,
  })
  create?: HabitCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: HabitCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput[] | undefined;
}
