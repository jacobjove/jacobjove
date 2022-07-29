import { ApolloContext } from "@/graphql/context";
import { TaskCrudResolver } from "@/graphql/schema/resolvers/crud/Task/TaskCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Task } from "../../../models/Task";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class DeleteManyTaskResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return TaskCrudResolver.prototype.deleteManyTask(ctx, info, args);
  }
}
