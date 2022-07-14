import * as TypeGraphQL from "type-graphql";
import { RoutineUpdateInput } from "../../../inputs/RoutineUpdateInput";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineUpdateInput, {
    nullable: false,
  })
  data!: RoutineUpdateInput;

  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineWhereUniqueInput;
}
