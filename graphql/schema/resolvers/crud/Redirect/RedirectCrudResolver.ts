import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Redirect } from "../../../models/Redirect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRedirect } from "../../outputs/AggregateRedirect";
import { AggregateRedirectArgs } from "./args/AggregateRedirectArgs";
import { CreateManyRedirectArgs } from "./args/CreateManyRedirectArgs";
import { CreateRedirectArgs } from "./args/CreateRedirectArgs";
import { DeleteManyRedirectArgs } from "./args/DeleteManyRedirectArgs";
import { DeleteRedirectArgs } from "./args/DeleteRedirectArgs";
import { FindFirstRedirectArgs } from "./args/FindFirstRedirectArgs";
import { FindManyRedirectArgs } from "./args/FindManyRedirectArgs";
import { FindUniqueRedirectArgs } from "./args/FindUniqueRedirectArgs";
import { UpdateManyRedirectArgs } from "./args/UpdateManyRedirectArgs";
import { UpdateRedirectArgs } from "./args/UpdateRedirectArgs";
import { UpsertRedirectArgs } from "./args/UpsertRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class RedirectCrudResolver {
  @TypeGraphQL.Query((_returns) => Redirect, { nullable: true })
  async redirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRedirectArgs
  ): Promise<Redirect | null> {
    return getPrismaFromContext(ctx).redirect.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Redirect, { nullable: true })
  async findFirstRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRedirectArgs
  ): Promise<Redirect | null> {
    return getPrismaFromContext(ctx).redirect.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Redirect], { nullable: false })
  async redirects(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRedirectArgs
  ): Promise<Redirect[]> {
    return getPrismaFromContext(ctx).redirect.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: false })
  async createRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRedirectArgs
  ): Promise<Redirect> {
    return getPrismaFromContext(ctx).redirect.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).redirect.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: true })
  async deleteRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRedirectArgs
  ): Promise<Redirect | null> {
    return getPrismaFromContext(ctx).redirect.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: true })
  async updateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRedirectArgs
  ): Promise<Redirect | null> {
    return getPrismaFromContext(ctx).redirect.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).redirect.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).redirect.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: false })
  async upsertRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRedirectArgs
  ): Promise<Redirect> {
    return getPrismaFromContext(ctx).redirect.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateRedirect, { nullable: false })
  async aggregateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRedirectArgs
  ): Promise<AggregateRedirect> {
    return getPrismaFromContext(ctx).redirect.aggregate({
      ...args,
    });
  }
}
