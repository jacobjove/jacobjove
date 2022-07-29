import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { AggregateShelving } from "../../outputs/AggregateShelving";
import { AggregateShelvingArgs } from "./args/AggregateShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class AggregateShelvingResolver {
  @TypeGraphQL.Query((_returns) => AggregateShelving, { nullable: false })
  async aggregateShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateShelvingArgs
  ): Promise<AggregateShelving> {
    return ShelvingCrudResolver.prototype.aggregateShelving(ctx, info, args);
  }
}
