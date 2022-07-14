import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { UpdateMantraArgs } from "./args/UpdateMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class UpdateMantraResolver {
  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: true,
  })
  async updateMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMantraArgs
  ): Promise<Mantra | null> {
    return MantraCrudResolver.prototype.updateMantra(ctx, info, args);
  }
}
