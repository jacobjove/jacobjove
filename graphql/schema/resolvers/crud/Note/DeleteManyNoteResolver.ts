import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyNoteArgs } from "./args/DeleteManyNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class DeleteManyNoteResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return NoteCrudResolver.prototype.deleteManyNote(ctx, info, args);
  }
}
