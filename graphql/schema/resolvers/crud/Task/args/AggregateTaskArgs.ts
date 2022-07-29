import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskOrderByWithRelationInput } from "../../../inputs/TaskOrderByWithRelationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTaskArgs {
  @TypeGraphQL.Field(() => TaskWhereInput, { nullable: true })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(() => [TaskOrderByWithRelationInput], { nullable: true })
  orderBy?: TaskOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
