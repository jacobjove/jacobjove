import { GqlContext } from "@/graphql/context";
import { Note } from "@/graphql/schema/generated/models/note.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNote } from "../../outputs/AggregateNote";
import { AggregateNoteArgs } from "./args/AggregateNoteArgs";
import { CreateManyNoteArgs } from "./args/CreateManyNoteArgs";
import { CreateNoteArgs } from "./args/CreateNoteArgs";
import { DeleteManyNoteArgs } from "./args/DeleteManyNoteArgs";
import { DeleteNoteArgs } from "./args/DeleteNoteArgs";
import { FindFirstNoteArgs } from "./args/FindFirstNoteArgs";
import { FindManyNoteArgs } from "./args/FindManyNoteArgs";
import { FindUniqueNoteArgs } from "./args/FindUniqueNoteArgs";
import { UpdateManyNoteArgs } from "./args/UpdateManyNoteArgs";
import { UpdateNoteArgs } from "./args/UpdateNoteArgs";
import { UpsertNoteArgs } from "./args/UpsertNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class NoteCrudResolver {
  @TypeGraphQL.Query((_returns) => Note, { nullable: true })
  async note(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNoteArgs
  ): Promise<Note | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Note, { nullable: true })
  async findFirstNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNoteArgs
  ): Promise<Note | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Note], { nullable: false })
  async notes(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNoteArgs
  ): Promise<Note[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: false })
  async createNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNoteArgs
  ): Promise<Note> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: true })
  async deleteNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNoteArgs
  ): Promise<Note | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: true })
  async updateNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNoteArgs
  ): Promise<Note | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: false })
  async upsertNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNoteArgs
  ): Promise<Note> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateNote, { nullable: false })
  async aggregateNote(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNoteArgs
  ): Promise<AggregateNote> {
    throw new Error("Not implemented");
  }
}
