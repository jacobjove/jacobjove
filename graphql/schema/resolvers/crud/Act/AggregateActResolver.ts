import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { AggregateAct } from "../../outputs/AggregateAct";
import { AggregateActArgs } from "./args/AggregateActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class AggregateActResolver {
  @TypeGraphQL.Query((_returns) => AggregateAct, {
    nullable: false,
  })
  async aggregateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActArgs
  ): Promise<AggregateAct> {
    return ActCrudResolver.prototype.aggregateAct(ctx, info, args);
  }
}
