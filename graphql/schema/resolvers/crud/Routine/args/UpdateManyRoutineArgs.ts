import * as TypeGraphQL from "type-graphql";
import { RoutineUpdateManyMutationInput } from "../../../inputs/RoutineUpdateManyMutationInput";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineUpdateManyMutationInput, {
    nullable: false,
  })
  data!: RoutineUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => RoutineWhereInput, {
    nullable: true,
  })
  where?: RoutineWhereInput | undefined;
}
