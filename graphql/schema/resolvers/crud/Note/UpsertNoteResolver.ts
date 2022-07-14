import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { UpsertNoteArgs } from "./args/UpsertNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class UpsertNoteResolver {
  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: false,
  })
  async upsertNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNoteArgs
  ): Promise<Note> {
    return NoteCrudResolver.prototype.upsertNote(ctx, info, args);
  }
}
