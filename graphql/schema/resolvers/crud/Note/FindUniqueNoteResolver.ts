import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { FindUniqueNoteArgs } from "./args/FindUniqueNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class FindUniqueNoteResolver {
  @TypeGraphQL.Query((_returns) => Note, {
    nullable: true,
  })
  async note(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNoteArgs
  ): Promise<Note | null> {
    return NoteCrudResolver.prototype.note(ctx, info, args);
  }
}
