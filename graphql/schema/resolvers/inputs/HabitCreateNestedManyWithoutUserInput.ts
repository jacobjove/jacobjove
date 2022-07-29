import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyUserInputEnvelope } from "../inputs/HabitCreateManyUserInputEnvelope";
import { HabitCreateOrConnectWithoutUserInput } from "../inputs/HabitCreateOrConnectWithoutUserInput";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class HabitCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [HabitCreateWithoutUserInput], { nullable: true })
  create?: HabitCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => HabitCreateManyUserInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;
}
