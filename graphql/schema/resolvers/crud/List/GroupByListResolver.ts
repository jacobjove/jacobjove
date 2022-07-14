import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { List } from "../../../models/List";
import { ListGroupBy } from "../../outputs/ListGroupBy";
import { GroupByListArgs } from "./args/GroupByListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class GroupByListResolver {
  @TypeGraphQL.Query((_returns) => [ListGroupBy], {
    nullable: false,
  })
  async groupByList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByListArgs
  ): Promise<ListGroupBy[]> {
    return ListCrudResolver.prototype.groupByList(ctx, info, args);
  }
}
