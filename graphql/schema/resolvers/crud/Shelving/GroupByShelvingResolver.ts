import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Shelving } from "../../../models/Shelving";
import { ShelvingGroupBy } from "../../outputs/ShelvingGroupBy";
import { GroupByShelvingArgs } from "./args/GroupByShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class GroupByShelvingResolver {
  @TypeGraphQL.Query((_returns) => [ShelvingGroupBy], {
    nullable: false,
  })
  async groupByShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByShelvingArgs
  ): Promise<ShelvingGroupBy[]> {
    return ShelvingCrudResolver.prototype.groupByShelving(ctx, info, args);
  }
}
