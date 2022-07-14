import { ApolloContext } from "@/graphql/context";
import { ReadingCrudResolver } from "@/graphql/schema/resolvers/crud/Reading/ReadingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Reading } from "../../../models/Reading";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyReadingArgs } from "./args/DeleteManyReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class DeleteManyReadingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    return ReadingCrudResolver.prototype.deleteManyReading(ctx, info, args);
  }
}
