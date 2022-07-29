import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../../../models/Act";
import { UpsertActArgs } from "./args/UpsertActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class UpsertActResolver {
  @TypeGraphQL.Mutation((_returns) => Act, { nullable: false })
  async upsertAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActArgs
  ): Promise<Act> {
    return ActCrudResolver.prototype.upsertAct(ctx, info, args);
  }
}
