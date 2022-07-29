import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyInput } from "../../../inputs/HabitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHabitArgs {
  @TypeGraphQL.Field(() => [HabitCreateManyInput], { nullable: false })
  data!: HabitCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
