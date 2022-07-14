import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  createItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
  updateItem,
} from "../../../helpers";
import { Note } from "../../../models/Note";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNote } from "../../outputs/AggregateNote";
import { NoteGroupBy } from "../../outputs/NoteGroupBy";
import { AggregateNoteArgs } from "./args/AggregateNoteArgs";
import { CreateManyNoteArgs } from "./args/CreateManyNoteArgs";
import { CreateNoteArgs } from "./args/CreateNoteArgs";
import { DeleteManyNoteArgs } from "./args/DeleteManyNoteArgs";
import { DeleteNoteArgs } from "./args/DeleteNoteArgs";
import { FindFirstNoteArgs } from "./args/FindFirstNoteArgs";
import { FindManyNoteArgs } from "./args/FindManyNoteArgs";
import { FindUniqueNoteArgs } from "./args/FindUniqueNoteArgs";
import { GroupByNoteArgs } from "./args/GroupByNoteArgs";
import { UpdateManyNoteArgs } from "./args/UpdateManyNoteArgs";
import { UpdateNoteArgs } from "./args/UpdateNoteArgs";
import { UpsertNoteArgs } from "./args/UpsertNoteArgs";

@TypeGraphQL.Resolver((_of) => Note)
export class NoteCrudResolver {
  @TypeGraphQL.Query((_returns) => Note, {
    nullable: true,
  })
  async note(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNoteArgs
  ): Promise<Note | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Note, {
    nullable: true,
  })
  async findFirstNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNoteArgs
  ): Promise<Note | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Note], {
    nullable: false,
  })
  async notes(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNoteArgs
  ): Promise<Note[]> {
    return getUserSubcollectionData("notes", ctx, info, args) as Promise<Note[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: false,
  })
  async createNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNoteArgs
  ): Promise<Note> {
    return createItem("notes", ctx, info, args) as Promise<Note>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: true,
  })
  async deleteNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNoteArgs
  ): Promise<Note | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: true,
  })
  async updateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNoteArgs
  ): Promise<Note | null> {
    return updateItem("notes", ctx, info, args, true) as Promise<Note | null>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNoteArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Note, {
    nullable: false,
  })
  async upsertNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNoteArgs
  ): Promise<Note> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateNote, {
    nullable: false,
  })
  async aggregateNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNoteArgs
  ): Promise<AggregateNote> {
    return getPrismaFromContext(ctx).note.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [NoteGroupBy], {
    nullable: false,
  })
  async groupByNote(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByNoteArgs
  ): Promise<NoteGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).note.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
