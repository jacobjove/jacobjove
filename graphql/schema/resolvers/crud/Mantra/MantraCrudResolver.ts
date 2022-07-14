import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getCollectionData,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Mantra } from "../../../models/Mantra";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMantra } from "../../outputs/AggregateMantra";
import { MantraGroupBy } from "../../outputs/MantraGroupBy";
import { AggregateMantraArgs } from "./args/AggregateMantraArgs";
import { CreateMantraArgs } from "./args/CreateMantraArgs";
import { CreateManyMantraArgs } from "./args/CreateManyMantraArgs";
import { DeleteMantraArgs } from "./args/DeleteMantraArgs";
import { DeleteManyMantraArgs } from "./args/DeleteManyMantraArgs";
import { FindFirstMantraArgs } from "./args/FindFirstMantraArgs";
import { FindManyMantraArgs } from "./args/FindManyMantraArgs";
import { FindUniqueMantraArgs } from "./args/FindUniqueMantraArgs";
import { GroupByMantraArgs } from "./args/GroupByMantraArgs";
import { UpdateMantraArgs } from "./args/UpdateMantraArgs";
import { UpdateManyMantraArgs } from "./args/UpdateManyMantraArgs";
import { UpsertMantraArgs } from "./args/UpsertMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class MantraCrudResolver {
  @TypeGraphQL.Query((_returns) => Mantra, {
    nullable: true,
  })
  async mantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMantraArgs
  ): Promise<Mantra | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Mantra, {
    nullable: true,
  })
  async findFirstMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMantraArgs
  ): Promise<Mantra | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Mantra], {
    nullable: false,
  })
  async mantras(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMantraArgs
  ): Promise<Mantra[]> {
    return getCollectionData("mantras", ctx, info, args) as Promise<Mantra[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: false,
  })
  async createMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMantraArgs
  ): Promise<Mantra> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: true,
  })
  async deleteMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMantraArgs
  ): Promise<Mantra | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: true,
  })
  async updateMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMantraArgs
  ): Promise<Mantra | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, {
    nullable: false,
  })
  async upsertMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMantraArgs
  ): Promise<Mantra> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateMantra, {
    nullable: false,
  })
  async aggregateMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMantraArgs
  ): Promise<AggregateMantra> {
    return getPrismaFromContext(ctx).mantra.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [MantraGroupBy], {
    nullable: false,
  })
  async groupByMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByMantraArgs
  ): Promise<MantraGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).mantra.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
