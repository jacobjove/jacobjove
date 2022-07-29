import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitWhereInput } from "../inputs/HabitWhereInput";

@TypeGraphQL.InputType("HabitRelationFilter", {
  isAbstract: true,
})
export class HabitRelationFilter {
  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  is?: HabitWhereInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  isNot?: HabitWhereInput | undefined;
}
