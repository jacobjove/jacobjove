import { GqlContext } from "@/graphql/context";
import { Redirect } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRedirectArgs
  ): Promise<Redirect | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Redirect, { nullable: true })
  async findFirstRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRedirectArgs
  ): Promise<Redirect | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Redirect], { nullable: false })
  async redirects(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRedirectArgs
  ): Promise<Redirect[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: false })
  async createRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRedirectArgs
  ): Promise<Redirect> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: true })
  async deleteRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRedirectArgs
  ): Promise<Redirect | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: true })
  async updateRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRedirectArgs
  ): Promise<Redirect | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: false })
  async upsertRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRedirectArgs
  ): Promise<Redirect> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateRedirect, { nullable: false })
  async aggregateRedirect(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRedirectArgs
  ): Promise<AggregateRedirect> {
    throw new Error("Not implemented");
  }
}
