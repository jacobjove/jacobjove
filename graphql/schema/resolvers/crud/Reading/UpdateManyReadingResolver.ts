import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Reading } from "../../../models/Reading";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyReadingArgs } from "./args/UpdateManyReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class UpdateManyReadingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    return ReadingCrudResolver.prototype.updateManyReading(ctx, info, args);
  }
}
