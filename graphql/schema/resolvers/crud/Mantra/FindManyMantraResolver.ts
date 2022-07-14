import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { FindManyMantraArgs } from "./args/FindManyMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class FindManyMantraResolver {
  @TypeGraphQL.Query((_returns) => [Mantra], {
    nullable: false,
  })
  async mantras(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMantraArgs
  ): Promise<Mantra[]> {
    return MantraCrudResolver.prototype.mantras(ctx, info, args);
  }
}
