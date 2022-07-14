import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyBookArgs } from "./args/CreateManyBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class CreateManyBookResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookArgs
  ): Promise<AffectedRowsOutput> {
    return BookCrudResolver.prototype.createManyBook(ctx, info, args);
  }
}
