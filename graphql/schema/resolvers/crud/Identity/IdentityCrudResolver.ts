import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Identity } from "../../../models/Identity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIdentity } from "../../outputs/AggregateIdentity";
import { IdentityGroupBy } from "../../outputs/IdentityGroupBy";
import { AggregateIdentityArgs } from "./args/AggregateIdentityArgs";
import { CreateIdentityArgs } from "./args/CreateIdentityArgs";
import { CreateManyIdentityArgs } from "./args/CreateManyIdentityArgs";
import { DeleteIdentityArgs } from "./args/DeleteIdentityArgs";
import { DeleteManyIdentityArgs } from "./args/DeleteManyIdentityArgs";
import { FindFirstIdentityArgs } from "./args/FindFirstIdentityArgs";
import { FindManyIdentityArgs } from "./args/FindManyIdentityArgs";
import { FindUniqueIdentityArgs } from "./args/FindUniqueIdentityArgs";
import { GroupByIdentityArgs } from "./args/GroupByIdentityArgs";
import { UpdateIdentityArgs } from "./args/UpdateIdentityArgs";
import { UpdateManyIdentityArgs } from "./args/UpdateManyIdentityArgs";
import { UpsertIdentityArgs } from "./args/UpsertIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityCrudResolver {
  @TypeGraphQL.Query((_returns) => Identity, {
    nullable: true,
  })
  async identity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityArgs
  ): Promise<Identity | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Identity, {
    nullable: true,
  })
  async findFirstIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityArgs
  ): Promise<Identity | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Identity], {
    nullable: false,
  })
  async identities(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityArgs
  ): Promise<Identity[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: false,
  })
  async createIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityArgs
  ): Promise<Identity> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: true,
  })
  async deleteIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityArgs
  ): Promise<Identity | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: true,
  })
  async updateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityArgs
  ): Promise<Identity | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: false,
  })
  async upsertIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityArgs
  ): Promise<Identity> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentity, {
    nullable: false,
  })
  async aggregateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityArgs
  ): Promise<AggregateIdentity> {
    return getPrismaFromContext(ctx).identity.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [IdentityGroupBy], {
    nullable: false,
  })
  async groupByIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByIdentityArgs
  ): Promise<IdentityGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identity.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
