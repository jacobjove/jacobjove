import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateManyHabitInput } from "../inputs/ActionCreateManyHabitInput";

@TypeGraphQL.InputType("ActionCreateManyHabitInputEnvelope", { isAbstract: true })
export class ActionCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field(() => [ActionCreateManyHabitInput], { nullable: false })
  data!: ActionCreateManyHabitInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
