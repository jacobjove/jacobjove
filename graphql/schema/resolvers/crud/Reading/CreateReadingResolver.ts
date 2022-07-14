import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Reading } from "../../../models/Reading";
import { CreateReadingArgs } from "./args/CreateReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class CreateReadingResolver {
  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: false,
  })
  async createReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateReadingArgs
  ): Promise<Reading> {
    return ReadingCrudResolver.prototype.createReading(ctx, info, args);
  }
}
