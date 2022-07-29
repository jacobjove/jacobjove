import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class DeleteTaskResolver {
  @TypeGraphQL.Mutation((_returns) => Task, { nullable: true })
  async deleteTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteTaskArgs
  ): Promise<Task | null> {
    return TaskCrudResolver.prototype.deleteTask(ctx, info, args);
  }
}
