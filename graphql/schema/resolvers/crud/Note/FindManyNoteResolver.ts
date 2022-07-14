import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { FindManyNoteArgs } from "./args/FindManyNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class FindManyNoteResolver {
  @TypeGraphQL.Query((_returns) => [Note], {
    nullable: false,
  })
  async notes(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNoteArgs
  ): Promise<Note[]> {
    return NoteCrudResolver.prototype.notes(ctx, info, args);
  }
}
