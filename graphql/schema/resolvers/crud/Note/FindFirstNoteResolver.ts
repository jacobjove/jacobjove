import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { FindFirstNoteArgs } from "./args/FindFirstNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class FindFirstNoteResolver {
  @TypeGraphQL.Query((_returns) => Note, {
    nullable: true,
  })
  async findFirstNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNoteArgs
  ): Promise<Note | null> {
    return NoteCrudResolver.prototype.findFirstNote(ctx, info, args);
  }
}
