import * as TypeGraphQL from "type-graphql";
import { RoutineWhereInput } from "../inputs/RoutineWhereInput";

@TypeGraphQL.InputType("RoutineRelationFilter", {
  isAbstract: true,
})
export class RoutineRelationFilter {
  @TypeGraphQL.Field((_type) => RoutineWhereInput, {
    nullable: true,
  })
  is?: RoutineWhereInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineWhereInput, {
    nullable: true,
  })
  isNot?: RoutineWhereInput | undefined;
}
