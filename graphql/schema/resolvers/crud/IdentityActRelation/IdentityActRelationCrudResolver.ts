import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIdentityActRelation } from "../../outputs/AggregateIdentityActRelation";
import { AggregateIdentityActRelationArgs } from "./args/AggregateIdentityActRelationArgs";
import { CreateIdentityActRelationArgs } from "./args/CreateIdentityActRelationArgs";
import { CreateManyIdentityActRelationArgs } from "./args/CreateManyIdentityActRelationArgs";
import { DeleteIdentityActRelationArgs } from "./args/DeleteIdentityActRelationArgs";
import { DeleteManyIdentityActRelationArgs } from "./args/DeleteManyIdentityActRelationArgs";
import { FindFirstIdentityActRelationArgs } from "./args/FindFirstIdentityActRelationArgs";
import { FindManyIdentityActRelationArgs } from "./args/FindManyIdentityActRelationArgs";
import { FindUniqueIdentityActRelationArgs } from "./args/FindUniqueIdentityActRelationArgs";
import { UpdateIdentityActRelationArgs } from "./args/UpdateIdentityActRelationArgs";
import { UpdateManyIdentityActRelationArgs } from "./args/UpdateManyIdentityActRelationArgs";
import { UpsertIdentityActRelationArgs } from "./args/UpsertIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class IdentityActRelationCrudResolver {
  @TypeGraphQL.Query((_returns) => IdentityActRelation, { nullable: true })
  async identityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return getPrismaFromContext(ctx).identityActRelation.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => IdentityActRelation, { nullable: true })
  async findFirstIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return getPrismaFromContext(ctx).identityActRelation.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [IdentityActRelation], { nullable: false })
  async identityActRelations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityActRelationArgs
  ): Promise<IdentityActRelation[]> {
    return getPrismaFromContext(ctx).identityActRelation.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: false })
  async createIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    return getPrismaFromContext(ctx).identityActRelation.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identityActRelation.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: true })
  async deleteIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return getPrismaFromContext(ctx).identityActRelation.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: true })
  async updateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    return getPrismaFromContext(ctx).identityActRelation.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identityActRelation.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).identityActRelation.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: false })
  async upsertIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    return getPrismaFromContext(ctx).identityActRelation.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentityActRelation, { nullable: false })
  async aggregateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityActRelationArgs
  ): Promise<AggregateIdentityActRelation> {
    return getPrismaFromContext(ctx).identityActRelation.aggregate({
      ...args,
    });
  }
}
