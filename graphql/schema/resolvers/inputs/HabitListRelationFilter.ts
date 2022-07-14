import * as TypeGraphQL from "type-graphql";
import { HabitWhereInput } from "../inputs/HabitWhereInput";

@TypeGraphQL.InputType("HabitListRelationFilter", {
  isAbstract: true,
})
export class HabitListRelationFilter {
  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  every?: HabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  some?: HabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  none?: HabitWhereInput | undefined;
}
