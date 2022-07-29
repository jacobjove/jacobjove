import { ApolloContext } from "@/graphql/context";
import { ListCrudResolver } from "@/graphql/schema/resolvers/crud/List/ListCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { List } from "../../../models/List";
import { AggregateList } from "../../outputs/AggregateList";
import { AggregateListArgs } from "./args/AggregateListArgs";

@TypeGraphQL.Resolver((_of) => List)
export class AggregateListResolver {
  @TypeGraphQL.Query((_returns) => AggregateList, { nullable: false })
  async aggregateList(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateListArgs
  ): Promise<AggregateList> {
    return ListCrudResolver.prototype.aggregateList(ctx, info, args);
  }
}
