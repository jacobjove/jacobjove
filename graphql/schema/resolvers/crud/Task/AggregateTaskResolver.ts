import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { AggregateTask } from "../../outputs/AggregateTask";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class AggregateTaskResolver {
  @TypeGraphQL.Query((_returns) => AggregateTask, {
    nullable: false,
  })
  async aggregateTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTaskArgs
  ): Promise<AggregateTask> {
    return TaskCrudResolver.prototype.aggregateTask(ctx, info, args);
  }
}
