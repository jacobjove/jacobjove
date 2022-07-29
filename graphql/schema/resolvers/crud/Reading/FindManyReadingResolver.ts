import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { FindManyReadingArgs } from "./args/FindManyReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class FindManyReadingResolver {
  @TypeGraphQL.Query((_returns) => [Reading], { nullable: false })
  async readings(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyReadingArgs
  ): Promise<Reading[]> {
    return ReadingCrudResolver.prototype.readings(ctx, info, args);
  }
}
