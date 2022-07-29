import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyMutationInput } from "../inputs/HabitUpdateManyMutationInput";

@TypeGraphQL.InputType("HabitUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(() => HabitScalarWhereInput, { nullable: false })
  where!: HabitScalarWhereInput;

  @TypeGraphQL.Field(() => HabitUpdateManyMutationInput, { nullable: false })
  data!: HabitUpdateManyMutationInput;
}
