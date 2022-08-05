import { GqlContext } from "@/graphql/context";
import { Identity } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityArgs
  ): Promise<Identity | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Identity, { nullable: true })
  async findFirstIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityArgs
  ): Promise<Identity | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Identity], { nullable: false })
  async identities(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityArgs
  ): Promise<Identity[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async createIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityArgs
  ): Promise<Identity> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: true })
  async deleteIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityArgs
  ): Promise<Identity | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: true })
  async updateIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityArgs
  ): Promise<Identity | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async upsertIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityArgs
  ): Promise<Identity> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentity, { nullable: false })
  async aggregateIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityArgs
  ): Promise<AggregateIdentity> {
    throw new Error("Not implemented");
  }
}
