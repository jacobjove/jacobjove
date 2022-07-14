import * as TypeGraphQL from "type-graphql";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereInput, {
    nullable: true,
  })
  where?: RoutineWhereInput | undefined;
}
