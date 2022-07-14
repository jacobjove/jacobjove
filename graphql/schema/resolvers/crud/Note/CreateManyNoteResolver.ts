import { ApolloContext } from "@/graphql/context";
import { NoteCrudResolver } from "@/graphql/schema/resolvers/crud/Note/NoteCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Note } from "../../../models/Note";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyNoteArgs } from "./args/CreateManyNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class CreateManyNoteResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return NoteCrudResolver.prototype.createManyNote(ctx, info, args);
  }
}
