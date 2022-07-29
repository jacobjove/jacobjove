import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskUpdateManyMutationInput } from "../../../inputs/TaskUpdateManyMutationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskArgs {
  @TypeGraphQL.Field(() => TaskUpdateManyMutationInput, { nullable: false })
  data!: TaskUpdateManyMutationInput;

  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;
}
