import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Authorship } from "../../../models/Authorship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAuthorship } from "../../outputs/AggregateAuthorship";
import { AuthorshipGroupBy } from "../../outputs/AuthorshipGroupBy";
import { AggregateAuthorshipArgs } from "./args/AggregateAuthorshipArgs";
import { CreateAuthorshipArgs } from "./args/CreateAuthorshipArgs";
import { CreateManyAuthorshipArgs } from "./args/CreateManyAuthorshipArgs";
import { DeleteAuthorshipArgs } from "./args/DeleteAuthorshipArgs";
import { DeleteManyAuthorshipArgs } from "./args/DeleteManyAuthorshipArgs";
import { FindFirstAuthorshipArgs } from "./args/FindFirstAuthorshipArgs";
import { FindManyAuthorshipArgs } from "./args/FindManyAuthorshipArgs";
import { FindUniqueAuthorshipArgs } from "./args/FindUniqueAuthorshipArgs";
import { GroupByAuthorshipArgs } from "./args/GroupByAuthorshipArgs";
import { UpdateAuthorshipArgs } from "./args/UpdateAuthorshipArgs";
import { UpdateManyAuthorshipArgs } from "./args/UpdateManyAuthorshipArgs";
import { UpsertAuthorshipArgs } from "./args/UpsertAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class AuthorshipCrudResolver {
  @TypeGraphQL.Query((_returns) => Authorship, {
    nullable: true,
  })
  async authorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorshipArgs
  ): Promise<Authorship | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Authorship, {
    nullable: true,
  })
  async findFirstAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorshipArgs
  ): Promise<Authorship | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Authorship], {
    nullable: false,
  })
  async authorships(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorshipArgs
  ): Promise<Authorship[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: false,
  })
  async createAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorshipArgs
  ): Promise<Authorship> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: true,
  })
  async deleteAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorshipArgs
  ): Promise<Authorship | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: true,
  })
  async updateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorshipArgs
  ): Promise<Authorship | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, {
    nullable: false,
  })
  async upsertAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorshipArgs
  ): Promise<Authorship> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateAuthorship, {
    nullable: false,
  })
  async aggregateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorshipArgs
  ): Promise<AggregateAuthorship> {
    return getPrismaFromContext(ctx).authorship.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [AuthorshipGroupBy], {
    nullable: false,
  })
  async groupByAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAuthorshipArgs
  ): Promise<AuthorshipGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).authorship.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
