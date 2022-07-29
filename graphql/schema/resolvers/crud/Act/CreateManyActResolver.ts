import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../../../models/Act";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyActArgs } from "./args/CreateManyActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class CreateManyActResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActArgs
  ): Promise<AffectedRowsOutput> {
    return ActCrudResolver.prototype.createManyAct(ctx, info, args);
  }
}
