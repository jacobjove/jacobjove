import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { CreateNoteArgs } from "./args/CreateNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class CreateNoteResolver {
  @TypeGraphQL.Mutation((_returns) => Note, { nullable: false })
  async createNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNoteArgs
  ): Promise<Note> {
    return NoteCrudResolver.prototype.createNote(ctx, info, args);
  }
}
