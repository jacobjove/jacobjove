import * as TypeGraphQL from "type-graphql";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineWhereUniqueInput;
}
