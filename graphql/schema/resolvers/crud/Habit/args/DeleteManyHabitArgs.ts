import * as TypeGraphQL from "type-graphql";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyHabitArgs {
  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  where?: HabitWhereInput | undefined;
}
