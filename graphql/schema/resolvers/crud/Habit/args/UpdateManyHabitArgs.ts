import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateManyMutationInput } from "../../../inputs/HabitUpdateManyMutationInput";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyHabitArgs {
  @TypeGraphQL.Field(() => HabitUpdateManyMutationInput, { nullable: false })
  data!: HabitUpdateManyMutationInput;

  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  where?: HabitWhereInput | undefined;
}
