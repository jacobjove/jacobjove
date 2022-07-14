import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Task } from "../../../models/Task";
import { CreateTaskArgs } from "./args/CreateTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class CreateTaskResolver {
  @TypeGraphQL.Mutation((_returns) => Task, {
    nullable: false,
  })
  async createTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTaskArgs
  ): Promise<Task> {
    return TaskCrudResolver.prototype.createTask(ctx, info, args);
  }
}
