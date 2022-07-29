import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class FindManyTaskResolver {
  @TypeGraphQL.Query((_returns) => [Task], { nullable: false })
  async tasks(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyTaskArgs
  ): Promise<Task[]> {
    return TaskCrudResolver.prototype.tasks(ctx, info, args);
  }
}
