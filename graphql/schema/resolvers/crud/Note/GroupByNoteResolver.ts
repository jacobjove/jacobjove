import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { NoteGroupBy } from "../../outputs/NoteGroupBy";
import { GroupByNoteArgs } from "./args/GroupByNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class GroupByNoteResolver {
  @TypeGraphQL.Query((_returns) => [NoteGroupBy], {
    nullable: false,
  })
  async groupByNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByNoteArgs
  ): Promise<NoteGroupBy[]> {
    return NoteCrudResolver.prototype.groupByNote(ctx, info, args);
  }
}
