import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Reading } from "../../../models/Reading";
import { FindUniqueReadingArgs } from "./args/FindUniqueReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class FindUniqueReadingResolver {
  @TypeGraphQL.Query((_returns) => Reading, {
    nullable: true,
  })
  async reading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueReadingArgs
  ): Promise<Reading | null> {
    return ReadingCrudResolver.prototype.reading(ctx, info, args);
  }
}
