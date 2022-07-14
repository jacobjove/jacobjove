import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Shelving } from "../../../models/Shelving";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateShelving } from "../../outputs/AggregateShelving";
import { ShelvingGroupBy } from "../../outputs/ShelvingGroupBy";
import { AggregateShelvingArgs } from "./args/AggregateShelvingArgs";
import { CreateManyShelvingArgs } from "./args/CreateManyShelvingArgs";
import { CreateShelvingArgs } from "./args/CreateShelvingArgs";
import { DeleteManyShelvingArgs } from "./args/DeleteManyShelvingArgs";
import { DeleteShelvingArgs } from "./args/DeleteShelvingArgs";
import { FindFirstShelvingArgs } from "./args/FindFirstShelvingArgs";
import { FindManyShelvingArgs } from "./args/FindManyShelvingArgs";
import { FindUniqueShelvingArgs } from "./args/FindUniqueShelvingArgs";
import { GroupByShelvingArgs } from "./args/GroupByShelvingArgs";
import { UpdateManyShelvingArgs } from "./args/UpdateManyShelvingArgs";
import { UpdateShelvingArgs } from "./args/UpdateShelvingArgs";
import { UpsertShelvingArgs } from "./args/UpsertShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class ShelvingCrudResolver {
  @TypeGraphQL.Query((_returns) => Shelving, {
    nullable: true,
  })
  async shelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueShelvingArgs
  ): Promise<Shelving | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Shelving, {
    nullable: true,
  })
  async findFirstShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstShelvingArgs
  ): Promise<Shelving | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Shelving], {
    nullable: false,
  })
  async shelvings(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyShelvingArgs
  ): Promise<Shelving[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, {
    nullable: false,
  })
  async createShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateShelvingArgs
  ): Promise<Shelving> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, {
    nullable: true,
  })
  async deleteShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteShelvingArgs
  ): Promise<Shelving | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, {
    nullable: true,
  })
  async updateShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateShelvingArgs
  ): Promise<Shelving | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, {
    nullable: false,
  })
  async upsertShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertShelvingArgs
  ): Promise<Shelving> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateShelving, {
    nullable: false,
  })
  async aggregateShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateShelvingArgs
  ): Promise<AggregateShelving> {
    return getPrismaFromContext(ctx).shelving.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ShelvingGroupBy], {
    nullable: false,
  })
  async groupByShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByShelvingArgs
  ): Promise<ShelvingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).shelving.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
