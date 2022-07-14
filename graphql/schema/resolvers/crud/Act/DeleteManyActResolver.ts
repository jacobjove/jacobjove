import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyActArgs } from "./args/DeleteManyActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class DeleteManyActResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActArgs
  ): Promise<AffectedRowsOutput> {
    return ActCrudResolver.prototype.deleteManyAct(ctx, info, args);
  }
}
