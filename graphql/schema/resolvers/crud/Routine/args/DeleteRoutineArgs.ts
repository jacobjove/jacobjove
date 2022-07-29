import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, { nullable: false })
  where!: RoutineWhereUniqueInput;
}
