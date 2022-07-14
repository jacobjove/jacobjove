import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { FindFirstMantraArgs } from "./args/FindFirstMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class FindFirstMantraResolver {
  @TypeGraphQL.Query((_returns) => Mantra, {
    nullable: true,
  })
  async findFirstMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMantraArgs
  ): Promise<Mantra | null> {
    return MantraCrudResolver.prototype.findFirstMantra(ctx, info, args);
  }
}
