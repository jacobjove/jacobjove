import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateManyHabitInputEnvelope } from "../inputs/ActionCreateManyHabitInputEnvelope";
import { ActionCreateOrConnectWithoutHabitInput } from "../inputs/ActionCreateOrConnectWithoutHabitInput";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateNestedManyWithoutHabitInput", { isAbstract: true })
export class ActionCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [ActionCreateWithoutHabitInput], { nullable: true })
  create?: ActionCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => ActionCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: ActionCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionWhereUniqueInput], { nullable: true })
  connect?: ActionWhereUniqueInput[] | undefined;
}
