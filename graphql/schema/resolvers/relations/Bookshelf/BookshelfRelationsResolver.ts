import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Bookshelf } from "../../../models/Bookshelf";
import { Shelving } from "../../../models/Shelving";
import { User } from "../../../models/User";
import { BookshelfShelvingsArgs } from "./args/BookshelfShelvingsArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class BookshelfRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async owner(
    @TypeGraphQL.Root() bookshelf: Bookshelf,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .bookshelf.findUnique({
        where: {
          id: bookshelf.id,
        },
      })
      .owner({});
  }

  @TypeGraphQL.FieldResolver((_type) => [Shelving], {
    nullable: false,
  })
  async shelvings(
    @TypeGraphQL.Root() bookshelf: Bookshelf,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: BookshelfShelvingsArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
    // return BookshelfCrudResolver.prototype.owner(ctx, info, args);
  }
}
