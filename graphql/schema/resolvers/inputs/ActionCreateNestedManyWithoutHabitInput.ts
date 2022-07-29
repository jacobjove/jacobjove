import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateManyHabitInputEnvelope } from "../inputs/ActionCreateManyHabitInputEnvelope";
import { ActionCreateOrConnectWithoutHabitInput } from "../inputs/ActionCreateOrConnectWithoutHabitInput";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class ActionCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [ActionCreateWithoutHabitInput], { nullable: true })
  create?: ActionCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: ActionCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereUniqueInput], { nullable: true })
  connect?: ActionWhereUniqueInput[] | undefined;
}
