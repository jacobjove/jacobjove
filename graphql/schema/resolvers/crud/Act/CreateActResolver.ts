import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { CreateActArgs } from "./args/CreateActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class CreateActResolver {
  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: false,
  })
  async createAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActArgs
  ): Promise<Act> {
    return ActCrudResolver.prototype.createAct(ctx, info, args);
  }
}
