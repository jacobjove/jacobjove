import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class UpdateTaskResolver {
  @TypeGraphQL.Mutation((_returns) => Task, { nullable: true })
  async updateTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateTaskArgs
  ): Promise<Task | null> {
    return TaskCrudResolver.prototype.updateTask(ctx, info, args);
  }
}
