import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyActInputEnvelope } from "../inputs/HabitCreateManyActInputEnvelope";
import { HabitCreateOrConnectWithoutActInput } from "../inputs/HabitCreateOrConnectWithoutActInput";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class HabitCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field(() => [HabitCreateWithoutActInput], { nullable: true })
  create?: HabitCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => HabitCreateManyActInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;
}
