import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Categorization } from "../../../models/Categorization";
import { CategorizationGroupBy } from "../../outputs/CategorizationGroupBy";
import { GroupByCategorizationArgs } from "./args/GroupByCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class GroupByCategorizationResolver {
  @TypeGraphQL.Query((_returns) => [CategorizationGroupBy], {
    nullable: false,
  })
  async groupByCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategorizationArgs
  ): Promise<CategorizationGroupBy[]> {
    return CategorizationCrudResolver.prototype.groupByCategorization(ctx, info, args);
  }
}
