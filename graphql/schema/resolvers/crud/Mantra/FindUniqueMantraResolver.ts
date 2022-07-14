import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { FindUniqueMantraArgs } from "./args/FindUniqueMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class FindUniqueMantraResolver {
  @TypeGraphQL.Query((_returns) => Mantra, {
    nullable: true,
  })
  async mantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMantraArgs
  ): Promise<Mantra | null> {
    return MantraCrudResolver.prototype.mantra(ctx, info, args);
  }
}
