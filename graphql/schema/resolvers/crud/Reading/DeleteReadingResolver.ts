import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { DeleteReadingArgs } from "./args/DeleteReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class DeleteReadingResolver {
  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: true })
  async deleteReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteReadingArgs
  ): Promise<Reading | null> {
    return ReadingCrudResolver.prototype.deleteReading(ctx, info, args);
  }
}
