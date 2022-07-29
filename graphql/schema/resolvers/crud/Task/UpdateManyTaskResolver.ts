import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class UpdateManyTaskResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return TaskCrudResolver.prototype.updateManyTask(ctx, info, args);
  }
}
