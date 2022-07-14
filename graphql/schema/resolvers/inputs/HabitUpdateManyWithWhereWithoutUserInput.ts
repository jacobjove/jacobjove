import * as TypeGraphQL from "type-graphql";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyMutationInput } from "../inputs/HabitUpdateManyMutationInput";

@TypeGraphQL.InputType("HabitUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => HabitScalarWhereInput, {
    nullable: false,
  })
  where!: HabitScalarWhereInput;

  @TypeGraphQL.Field((_type) => HabitUpdateManyMutationInput, {
    nullable: false,
  })
  data!: HabitUpdateManyMutationInput;
}
