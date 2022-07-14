import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class FindFirstTaskResolver {
  @TypeGraphQL.Query((_returns) => Task, {
    nullable: true,
  })
  async findFirstTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstTaskArgs
  ): Promise<Task | null> {
    return TaskCrudResolver.prototype.findFirstTask(ctx, info, args);
  }
}
