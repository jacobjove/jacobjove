import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { FindFirstReadingArgs } from "./args/FindFirstReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class FindFirstReadingResolver {
  @TypeGraphQL.Query((_returns) => Reading, { nullable: true })
  async findFirstReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstReadingArgs
  ): Promise<Reading | null> {
    return ReadingCrudResolver.prototype.findFirstReading(ctx, info, args);
  }
}
