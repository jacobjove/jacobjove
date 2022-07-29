import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitWhereInput } from "../inputs/HabitWhereInput";

@TypeGraphQL.InputType("HabitListRelationFilter", {
  isAbstract: true,
})
export class HabitListRelationFilter {
  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  every?: HabitWhereInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  some?: HabitWhereInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereInput, { nullable: true })
  none?: HabitWhereInput | undefined;
}
