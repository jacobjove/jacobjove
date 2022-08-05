import { GqlContext } from "@/graphql/context";
import { IdentityActRelation } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => IdentityActRelation, { nullable: true })
  async findFirstIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [IdentityActRelation], { nullable: false })
  async identityActRelations(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityActRelationArgs
  ): Promise<IdentityActRelation[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: false })
  async createIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: true })
  async deleteIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: true })
  async updateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, { nullable: false })
  async upsertIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentityActRelation, { nullable: false })
  async aggregateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityActRelationArgs
  ): Promise<AggregateIdentityActRelation> {
    throw new Error("Not implemented");
  }
}
