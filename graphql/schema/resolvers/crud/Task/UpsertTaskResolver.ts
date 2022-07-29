import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class UpsertTaskResolver {
  @TypeGraphQL.Mutation((_returns) => Task, { nullable: false })
  async upsertTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTaskArgs
  ): Promise<Task> {
    return TaskCrudResolver.prototype.upsertTask(ctx, info, args);
  }
}
