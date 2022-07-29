import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { AggregateReading } from "../../outputs/AggregateReading";
import { AggregateReadingArgs } from "./args/AggregateReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class AggregateReadingResolver {
  @TypeGraphQL.Query((_returns) => AggregateReading, { nullable: false })
  async aggregateReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateReadingArgs
  ): Promise<AggregateReading> {
    return ReadingCrudResolver.prototype.aggregateReading(ctx, info, args);
  }
}
