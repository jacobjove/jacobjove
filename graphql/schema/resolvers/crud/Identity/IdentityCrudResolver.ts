import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Identity } from "../../../models/Identity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIdentity } from "../../outputs/AggregateIdentity";
import { AggregateIdentityArgs } from "./args/AggregateIdentityArgs";
import { CreateIdentityArgs } from "./args/CreateIdentityArgs";
import { CreateManyIdentityArgs } from "./args/CreateManyIdentityArgs";
import { DeleteIdentityArgs } from "./args/DeleteIdentityArgs";
import { DeleteManyIdentityArgs } from "./args/DeleteManyIdentityArgs";
import { FindFirstIdentityArgs } from "./args/FindFirstIdentityArgs";
import { FindManyIdentityArgs } from "./args/FindManyIdentityArgs";
import { FindUniqueIdentityArgs } from "./args/FindUniqueIdentityArgs";
import { UpdateIdentityArgs } from "./args/UpdateIdentityArgs";
import { UpdateManyIdentityArgs } from "./args/UpdateManyIdentityArgs";
import { UpsertIdentityArgs } from "./args/UpsertIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityCrudResolver {
  @TypeGraphQL.Query((_returns) => Identity, { nullable: true })
  async identity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityArgs
  ): Promise<Identity | null> {
    return getPrismaFromContext(ctx).identity.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Identity, { nullable: true })
  async findFirstIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityArgs
  ): Promise<Identity | null> {
    return getPrismaFromContext(ctx).identity.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Identity], { nullable: false })
  async identities(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityArgs
  ): Promise<Identity[]> {
    return getPrismaFromContext(ctx).identity.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async createIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityArgs
  ): Promise<Identity> {
    return getPrismaFromContext(ctx).identity.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identity.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: true })
  async deleteIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityArgs
  ): Promise<Identity | null> {
    return getPrismaFromContext(ctx).identity.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: true })
  async updateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityArgs
  ): Promise<Identity | null> {
    return getPrismaFromContext(ctx).identity.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identity.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identity.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async upsertIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityArgs
  ): Promise<Identity> {
    return getPrismaFromContext(ctx).identity.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentity, { nullable: false })
  async aggregateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityArgs
  ): Promise<AggregateIdentity> {
    return getPrismaFromContext(ctx).identity.aggregate({
      ...args,
    });
  }
}
