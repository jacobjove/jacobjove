import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { UpsertMantraArgs } from "./args/UpsertMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class UpsertMantraResolver {
  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: false,
  })
  async upsertMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMantraArgs
  ): Promise<Mantra> {
    return MantraCrudResolver.prototype.upsertMantra(ctx, info, args);
  }
}
