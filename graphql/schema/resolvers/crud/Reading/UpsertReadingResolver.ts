import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Reading } from "../../../models/Reading";
import { UpsertReadingArgs } from "./args/UpsertReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class UpsertReadingResolver {
  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: false,
  })
  async upsertReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertReadingArgs
  ): Promise<Reading> {
    return ReadingCrudResolver.prototype.upsertReading(ctx, info, args);
  }
}
