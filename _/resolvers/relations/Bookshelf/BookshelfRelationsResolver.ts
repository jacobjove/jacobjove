import { GqlContext } from "@/graphql/context";
import { Bookshelf, Shelving } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfShelvingsArgs } from "./args/BookshelfShelvingsArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class BookshelfRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async owner(
    @TypeGraphQL.Root() bookshelf: Bookshelf,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Root() bookshelf: Bookshelf,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: BookshelfShelvingsArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }
}
