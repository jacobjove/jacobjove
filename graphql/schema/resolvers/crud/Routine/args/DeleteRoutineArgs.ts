import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineWhereUniqueInput } from "../../../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRoutineArgs {
  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: false })
  where!: RoutineWhereUniqueInput;
}
