import { GqlContext } from "@/graphql/context";
import { Bookshelf, Shelving } from "@/graphql/schema/generated/models";
import { Book } from "@/graphql/schema/generated/models/book.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Shelving)
export class ShelvingRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() shelving: Shelving,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Book> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Bookshelf, { nullable: false })
  async shelf(
    @TypeGraphQL.Root() shelving: Shelving,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Bookshelf> {
    throw new Error("Not implemented");
  }
}
