import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { UpdateNoteArgs } from "./args/UpdateNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class UpdateNoteResolver {
  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: true,
  })
  async updateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNoteArgs
  ): Promise<Note | null> {
    return NoteCrudResolver.prototype.updateNote(ctx, info, args);
  }
}
