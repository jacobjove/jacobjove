import * as TypeGraphQL from "type-graphql";
import { HabitCreateManyInput } from "../../../inputs/HabitCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyHabitArgs {
  @TypeGraphQL.Field((_type) => [HabitCreateManyInput], {
    nullable: false,
  })
  data!: HabitCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
