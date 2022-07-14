import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { AggregateMantra } from "../../outputs/AggregateMantra";
import { AggregateMantraArgs } from "./args/AggregateMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class AggregateMantraResolver {
  @TypeGraphQL.Query((_returns) => AggregateMantra, {
    nullable: false,
  })
  async aggregateMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMantraArgs
  ): Promise<AggregateMantra> {
    return MantraCrudResolver.prototype.aggregateMantra(ctx, info, args);
  }
}
