import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyMutationInput } from "../inputs/HabitUpdateManyMutationInput";

@TypeGraphQL.InputType("HabitUpdateManyWithWhereWithoutActInput", {
  isAbstract: true,
})
export class HabitUpdateManyWithWhereWithoutActInput {
  @TypeGraphQL.Field((_type) => HabitScalarWhereInput, { nullable: false })
  where!: HabitScalarWhereInput;

  @TypeGraphQL.Field((_type) => HabitUpdateManyMutationInput, { nullable: false })
  data!: HabitUpdateManyMutationInput;
}
