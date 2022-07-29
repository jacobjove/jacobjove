import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAct } from "../../outputs/AggregateAct";
import { AggregateActArgs } from "./args/AggregateActArgs";
import { CreateActArgs } from "./args/CreateActArgs";
import { CreateManyActArgs } from "./args/CreateManyActArgs";
import { DeleteActArgs } from "./args/DeleteActArgs";
import { DeleteManyActArgs } from "./args/DeleteManyActArgs";
import { FindFirstActArgs } from "./args/FindFirstActArgs";
import { FindManyActArgs } from "./args/FindManyActArgs";
import { FindUniqueActArgs } from "./args/FindUniqueActArgs";
import { UpdateActArgs } from "./args/UpdateActArgs";
import { UpdateManyActArgs } from "./args/UpdateManyActArgs";
import { UpsertActArgs } from "./args/UpsertActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class ActCrudResolver {
  @TypeGraphQL.Query((_returns) => Act, { nullable: true })
  async act(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActArgs
  ): Promise<Act | null> {
    return getPrismaFromContext(ctx).act.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Act, { nullable: true })
  async findFirstAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActArgs
  ): Promise<Act | null> {
    return getPrismaFromContext(ctx).act.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Act], { nullable: false })
  async acts(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActArgs
  ): Promise<Act[]> {
    return getPrismaFromContext(ctx).act.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: false })
  async createAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActArgs
  ): Promise<Act> {
    return getPrismaFromContext(ctx).act.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).act.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: true })
  async deleteAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActArgs
  ): Promise<Act | null> {
    return getPrismaFromContext(ctx).act.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: true })
  async updateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActArgs
  ): Promise<Act | null> {
    return getPrismaFromContext(ctx).act.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).act.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).act.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: false })
  async upsertAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActArgs
  ): Promise<Act> {
    return getPrismaFromContext(ctx).act.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateAct, { nullable: false })
  async aggregateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActArgs
  ): Promise<AggregateAct> {
    return getPrismaFromContext(ctx).act.aggregate({
      ...args,
    });
  }
}
