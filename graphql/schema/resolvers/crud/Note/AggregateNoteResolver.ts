import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { AggregateNote } from "../../outputs/AggregateNote";
import { AggregateNoteArgs } from "./args/AggregateNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class AggregateNoteResolver {
  @TypeGraphQL.Query((_returns) => AggregateNote, { nullable: false })
  async aggregateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNoteArgs
  ): Promise<AggregateNote> {
    return NoteCrudResolver.prototype.aggregateNote(ctx, info, args);
  }
}
