import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyBookArgs } from "./args/DeleteManyBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class DeleteManyBookResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookArgs
  ): Promise<AffectedRowsOutput> {
    return BookCrudResolver.prototype.deleteManyBook(ctx, info, args);
  }
}
