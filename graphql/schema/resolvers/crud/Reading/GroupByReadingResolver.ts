import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Reading } from "../../../models/Reading";
import { ReadingGroupBy } from "../../outputs/ReadingGroupBy";
import { GroupByReadingArgs } from "./args/GroupByReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class GroupByReadingResolver {
  @TypeGraphQL.Query((_returns) => [ReadingGroupBy], {
    nullable: false,
  })
  async groupByReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByReadingArgs
  ): Promise<ReadingGroupBy[]> {
    return ReadingCrudResolver.prototype.groupByReading(ctx, info, args);
  }
}
