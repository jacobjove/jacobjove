import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Redirect } from "../../../models/Redirect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRedirect } from "../../outputs/AggregateRedirect";
import { RedirectGroupBy } from "../../outputs/RedirectGroupBy";
import { AggregateRedirectArgs } from "./args/AggregateRedirectArgs";
import { CreateManyRedirectArgs } from "./args/CreateManyRedirectArgs";
import { CreateRedirectArgs } from "./args/CreateRedirectArgs";
import { DeleteManyRedirectArgs } from "./args/DeleteManyRedirectArgs";
import { DeleteRedirectArgs } from "./args/DeleteRedirectArgs";
import { FindFirstRedirectArgs } from "./args/FindFirstRedirectArgs";
import { FindManyRedirectArgs } from "./args/FindManyRedirectArgs";
import { FindUniqueRedirectArgs } from "./args/FindUniqueRedirectArgs";
import { GroupByRedirectArgs } from "./args/GroupByRedirectArgs";
import { UpdateManyRedirectArgs } from "./args/UpdateManyRedirectArgs";
import { UpdateRedirectArgs } from "./args/UpdateRedirectArgs";
import { UpsertRedirectArgs } from "./args/UpsertRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class RedirectCrudResolver {
  @TypeGraphQL.Query((_returns) => Redirect, {
    nullable: true,
  })
  async redirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRedirectArgs
  ): Promise<Redirect | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Redirect, {
    nullable: true,
  })
  async findFirstRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRedirectArgs
  ): Promise<Redirect | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Redirect], {
    nullable: false,
  })
  async redirects(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRedirectArgs
  ): Promise<Redirect[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: false,
  })
  async createRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRedirectArgs
  ): Promise<Redirect> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: true,
  })
  async deleteRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRedirectArgs
  ): Promise<Redirect | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: true,
  })
  async updateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRedirectArgs
  ): Promise<Redirect | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: false,
  })
  async upsertRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRedirectArgs
  ): Promise<Redirect> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateRedirect, {
    nullable: false,
  })
  async aggregateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRedirectArgs
  ): Promise<AggregateRedirect> {
    return getPrismaFromContext(ctx).redirect.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [RedirectGroupBy], {
    nullable: false,
  })
  async groupByRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRedirectArgs
  ): Promise<RedirectGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).redirect.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
