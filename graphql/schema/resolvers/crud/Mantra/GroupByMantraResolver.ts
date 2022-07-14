import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { MantraGroupBy } from "../../outputs/MantraGroupBy";
import { GroupByMantraArgs } from "./args/GroupByMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class GroupByMantraResolver {
  @TypeGraphQL.Query((_returns) => [MantraGroupBy], {
    nullable: false,
  })
  async groupByMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMantraArgs
  ): Promise<MantraGroupBy[]> {
    return MantraCrudResolver.prototype.groupByMantra(ctx, info, args);
  }
}
