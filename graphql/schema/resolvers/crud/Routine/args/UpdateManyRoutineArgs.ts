import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineUpdateManyMutationInput } from "../../../inputs/RoutineUpdateManyMutationInput";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRoutineArgs {
  @TypeGraphQL.Field(() => RoutineUpdateManyMutationInput, { nullable: false })
  data!: RoutineUpdateManyMutationInput;

  @TypeGraphQL.Field(() => RoutineWhereInput, { nullable: true })
  where?: RoutineWhereInput | undefined;
}
