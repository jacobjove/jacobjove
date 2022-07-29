import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { DeleteNoteArgs } from "./args/DeleteNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class DeleteNoteResolver {
  @TypeGraphQL.Mutation((_returns) => Note, { nullable: true })
  async deleteNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNoteArgs
  ): Promise<Note | null> {
    return NoteCrudResolver.prototype.deleteNote(ctx, info, args);
  }
}
