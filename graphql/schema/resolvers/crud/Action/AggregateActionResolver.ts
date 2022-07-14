import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { AggregateAction } from "../../outputs/AggregateAction";
import { AggregateActionArgs } from "./args/AggregateActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class AggregateActionResolver {
  @TypeGraphQL.Query((_returns) => AggregateAction, {
    nullable: false,
  })
  async aggregateAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionArgs
  ): Promise<AggregateAction> {
    return ActionCrudResolver.prototype.aggregateAction(ctx, info, args);
  }
}
