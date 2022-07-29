import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { UpdateReadingArgs } from "./args/UpdateReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class UpdateReadingResolver {
  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: true })
  async updateReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateReadingArgs
  ): Promise<Reading | null> {
    return ReadingCrudResolver.prototype.updateReading(ctx, info, args);
  }
}
