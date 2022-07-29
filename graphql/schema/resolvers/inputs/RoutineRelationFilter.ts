import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineWhereInput } from "../inputs/RoutineWhereInput";

@TypeGraphQL.InputType("RoutineRelationFilter", {
  isAbstract: true,
})
export class RoutineRelationFilter {
  @TypeGraphQL.Field(() => RoutineWhereInput, { nullable: true })
  is?: RoutineWhereInput | undefined;

  @TypeGraphQL.Field(() => RoutineWhereInput, { nullable: true })
  isNot?: RoutineWhereInput | undefined;
}
