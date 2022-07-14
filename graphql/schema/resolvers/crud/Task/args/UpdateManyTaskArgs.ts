import * as TypeGraphQL from "type-graphql";
import { TaskUpdateManyMutationInput } from "../../../inputs/TaskUpdateManyMutationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskArgs {
  @TypeGraphQL.Field((_type) => TaskUpdateManyMutationInput, {
    nullable: false,
  })
  data!: TaskUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => TaskWhereInput, {
    nullable: true,
  })
  where?: TaskWhereInput | undefined;
}
