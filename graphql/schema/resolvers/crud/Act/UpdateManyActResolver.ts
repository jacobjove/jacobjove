import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../../../models/Act";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyActArgs } from "./args/UpdateManyActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class UpdateManyActResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActArgs
  ): Promise<AffectedRowsOutput> {
    return ActCrudResolver.prototype.updateManyAct(ctx, info, args);
  }
}
