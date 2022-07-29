import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "../../../models/Note";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyNoteArgs } from "./args/UpdateManyNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class UpdateManyNoteResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return NoteCrudResolver.prototype.updateManyNote(ctx, info, args);
  }
}
