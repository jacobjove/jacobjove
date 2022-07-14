import * as TypeGraphQL from "type-graphql";
import { HabitUpdateManyMutationInput } from "../../../inputs/HabitUpdateManyMutationInput";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHabitArgs {
  @TypeGraphQL.Field((_type) => HabitUpdateManyMutationInput, {
    nullable: false,
  })
  data!: HabitUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  where?: HabitWhereInput | undefined;
}
