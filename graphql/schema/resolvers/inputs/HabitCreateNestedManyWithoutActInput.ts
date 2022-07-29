import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyActInputEnvelope } from "../inputs/HabitCreateManyActInputEnvelope";
import { HabitCreateOrConnectWithoutActInput } from "../inputs/HabitCreateOrConnectWithoutActInput";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedManyWithoutActInput", {
  isAbstract: true,
})
export class HabitCreateNestedManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [HabitCreateWithoutActInput], { nullable: true })
  create?: HabitCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateManyActInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;
}
