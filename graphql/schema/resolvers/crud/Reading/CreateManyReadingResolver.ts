import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyReadingArgs } from "./args/CreateManyReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class CreateManyReadingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    return ReadingCrudResolver.prototype.createManyReading(ctx, info, args);
  }
}
