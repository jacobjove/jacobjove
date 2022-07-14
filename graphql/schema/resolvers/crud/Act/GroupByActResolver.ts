import { ApolloContext } from "@/graphql/context";
import { ActCrudResolver } from "@/graphql/schema/resolvers/crud/Act/ActCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Act } from "../../../models/Act";
import { ActGroupBy } from "../../outputs/ActGroupBy";
import { GroupByActArgs } from "./args/GroupByActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class GroupByActResolver {
  @TypeGraphQL.Query((_returns) => [ActGroupBy], {
    nullable: false,
  })
  async groupByAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActArgs
  ): Promise<ActGroupBy[]> {
    return ActCrudResolver.prototype.groupByAct(ctx, info, args);
  }
}
