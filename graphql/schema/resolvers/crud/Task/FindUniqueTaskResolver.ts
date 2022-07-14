import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class FindUniqueTaskResolver {
  @TypeGraphQL.Query((_returns) => Task, {
    nullable: true,
  })
  async task(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTaskArgs
  ): Promise<Task | null> {
    return TaskCrudResolver.prototype.task(ctx, info, args);
  }
}
