import * as TypeGraphQL from "type-graphql";
import { ActionCreateManyHabitInput } from "../inputs/ActionCreateManyHabitInput";

@TypeGraphQL.InputType("ActionCreateManyHabitInputEnvelope", {
  isAbstract: true,
})
export class ActionCreateManyHabitInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActionCreateManyHabitInput], {
    nullable: false,
  })
  data!: ActionCreateManyHabitInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
