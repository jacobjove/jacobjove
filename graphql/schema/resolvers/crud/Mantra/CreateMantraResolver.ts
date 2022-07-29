import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Mantra } from "../../../models/Mantra";
import { CreateMantraArgs } from "./args/CreateMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class CreateMantraResolver {
  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: false })
  async createMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMantraArgs
  ): Promise<Mantra> {
    return MantraCrudResolver.prototype.createMantra(ctx, info, args);
  }
}
