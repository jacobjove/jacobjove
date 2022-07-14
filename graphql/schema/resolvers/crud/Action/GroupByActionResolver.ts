import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { ActionGroupBy } from "../../outputs/ActionGroupBy";
import { GroupByActionArgs } from "./args/GroupByActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class GroupByActionResolver {
  @TypeGraphQL.Query((_returns) => [ActionGroupBy], {
    nullable: false,
  })
  async groupByAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionArgs
  ): Promise<ActionGroupBy[]> {
    return ActionCrudResolver.prototype.groupByAction(ctx, info, args);
  }
}
