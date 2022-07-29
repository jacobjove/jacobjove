import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoutineArgs {
  @TypeGraphQL.Field(() => RoutineWhereInput, { nullable: true })
  where?: RoutineWhereInput | undefined;
}
