import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIdentityActRelation } from "../../outputs/AggregateIdentityActRelation";
import { IdentityActRelationGroupBy } from "../../outputs/IdentityActRelationGroupBy";
import { AggregateIdentityActRelationArgs } from "./args/AggregateIdentityActRelationArgs";
import { CreateIdentityActRelationArgs } from "./args/CreateIdentityActRelationArgs";
import { CreateManyIdentityActRelationArgs } from "./args/CreateManyIdentityActRelationArgs";
import { DeleteIdentityActRelationArgs } from "./args/DeleteIdentityActRelationArgs";
import { DeleteManyIdentityActRelationArgs } from "./args/DeleteManyIdentityActRelationArgs";
import { FindFirstIdentityActRelationArgs } from "./args/FindFirstIdentityActRelationArgs";
import { FindManyIdentityActRelationArgs } from "./args/FindManyIdentityActRelationArgs";
import { FindUniqueIdentityActRelationArgs } from "./args/FindUniqueIdentityActRelationArgs";
import { GroupByIdentityActRelationArgs } from "./args/GroupByIdentityActRelationArgs";
import { UpdateIdentityActRelationArgs } from "./args/UpdateIdentityActRelationArgs";
import { UpdateManyIdentityActRelationArgs } from "./args/UpdateManyIdentityActRelationArgs";
import { UpsertIdentityActRelationArgs } from "./args/UpsertIdentityActRelationArgs";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class IdentityActRelationCrudResolver {
  @TypeGraphQL.Query((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async identityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async findFirstIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [IdentityActRelation], {
    nullable: false,
  })
  async identityActRelations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityActRelationArgs
  ): Promise<IdentityActRelation[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: false,
  })
  async createIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async deleteIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: true,
  })
  async updateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityActRelationArgs
  ): Promise<IdentityActRelation | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityActRelationArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => IdentityActRelation, {
    nullable: false,
  })
  async upsertIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityActRelationArgs
  ): Promise<IdentityActRelation> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateIdentityActRelation, {
    nullable: false,
  })
  async aggregateIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateIdentityActRelationArgs
  ): Promise<AggregateIdentityActRelation> {
    return getPrismaFromContext(ctx).identityActRelation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [IdentityActRelationGroupBy], {
    nullable: false,
  })
  async groupByIdentityActRelation(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByIdentityActRelationArgs
  ): Promise<IdentityActRelationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).identityActRelation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
