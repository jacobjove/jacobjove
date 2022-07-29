import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import {
  createItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  updateItem,
} from "../../../helpers";
import { Note } from "../../../models/Note";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNoteArgs
  ): Promise<Note | null> {
    return getPrismaFromContext(ctx).note.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Note, { nullable: true })
  async findFirstNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNoteArgs
  ): Promise<Note | null> {
    return getPrismaFromContext(ctx).note.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Note], { nullable: false })
  async notes(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNoteArgs
  ): Promise<Note[]> {
    return getUserSubcollectionData("notes", ctx, info, args) as Promise<Note[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: false })
  async createNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNoteArgs
  ): Promise<Note> {
    return createItem({
      collectionName: "notes",
      ctx,
      info,
      args,
    }) as Promise<Note>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).note.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: true })
  async deleteNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNoteArgs
  ): Promise<Note | null> {
    return getPrismaFromContext(ctx).note.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: true })
  async updateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNoteArgs
  ): Promise<Note | null> {
    return updateItem("notes", ctx, info, args, true) as Promise<Note | null>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).note.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).note.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Note, { nullable: false })
  async upsertNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNoteArgs
  ): Promise<Note> {
    return getPrismaFromContext(ctx).note.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateNote, { nullable: false })
  async aggregateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNoteArgs
  ): Promise<AggregateNote> {
    return getPrismaFromContext(ctx).note.aggregate({
      ...args,
    });
  }
}
