import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Act } from "../../../models/Act";
import { ActGroupBy } from "../../outputs/ActGroupBy";
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
import { GroupByActArgs } from "./args/GroupByActArgs";
import { UpdateActArgs } from "./args/UpdateActArgs";
import { UpdateManyActArgs } from "./args/UpdateManyActArgs";
import { UpsertActArgs } from "./args/UpsertActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class ActCrudResolver {
  @TypeGraphQL.Query((_returns) => Act, {
    nullable: true,
  })
  async act(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActArgs
  ): Promise<Act | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Act, {
    nullable: true,
  })
  async findFirstAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActArgs
  ): Promise<Act | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Act], {
    nullable: false,
  })
  async acts(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActArgs
  ): Promise<Act[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: false,
  })
  async createAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActArgs
  ): Promise<Act> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: true,
  })
  async deleteAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActArgs
  ): Promise<Act | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: true,
  })
  async updateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActArgs
  ): Promise<Act | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Act, {
    nullable: false,
  })
  async upsertAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActArgs
  ): Promise<Act> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateAct, {
    nullable: false,
  })
  async aggregateAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActArgs
  ): Promise<AggregateAct> {
    return getPrismaFromContext(ctx).act.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActGroupBy], {
    nullable: false,
  })
  async groupByAct(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActArgs
  ): Promise<ActGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).act.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
