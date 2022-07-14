import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { TaskGroupBy } from "../../outputs/TaskGroupBy";
import { GroupByTaskArgs } from "./args/GroupByTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class GroupByTaskResolver {
  @TypeGraphQL.Query((_returns) => [TaskGroupBy], {
    nullable: false,
  })
  async groupByTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByTaskArgs
  ): Promise<TaskGroupBy[]> {
    return TaskCrudResolver.prototype.groupByTask(ctx, info, args);
  }
}
