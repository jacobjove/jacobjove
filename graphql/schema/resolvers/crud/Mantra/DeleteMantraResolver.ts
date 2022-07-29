import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Mantra } from "../../../models/Mantra";
import { DeleteMantraArgs } from "./args/DeleteMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class DeleteMantraResolver {
  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: true })
  async deleteMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMantraArgs
  ): Promise<Mantra | null> {
    return MantraCrudResolver.prototype.deleteMantra(ctx, info, args);
  }
}
