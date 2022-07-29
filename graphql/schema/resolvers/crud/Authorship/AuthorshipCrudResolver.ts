import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Authorship } from "../../../models/Authorship";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAuthorship } from "../../outputs/AggregateAuthorship";
import { AggregateAuthorshipArgs } from "./args/AggregateAuthorshipArgs";
import { CreateAuthorshipArgs } from "./args/CreateAuthorshipArgs";
import { CreateManyAuthorshipArgs } from "./args/CreateManyAuthorshipArgs";
import { DeleteAuthorshipArgs } from "./args/DeleteAuthorshipArgs";
import { DeleteManyAuthorshipArgs } from "./args/DeleteManyAuthorshipArgs";
import { FindFirstAuthorshipArgs } from "./args/FindFirstAuthorshipArgs";
import { FindManyAuthorshipArgs } from "./args/FindManyAuthorshipArgs";
import { FindUniqueAuthorshipArgs } from "./args/FindUniqueAuthorshipArgs";
import { UpdateAuthorshipArgs } from "./args/UpdateAuthorshipArgs";
import { UpdateManyAuthorshipArgs } from "./args/UpdateManyAuthorshipArgs";
import { UpsertAuthorshipArgs } from "./args/UpsertAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class AuthorshipCrudResolver {
  @TypeGraphQL.Query((_returns) => Authorship, { nullable: true })
  async authorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorshipArgs
  ): Promise<Authorship | null> {
    return getPrismaFromContext(ctx).authorship.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Authorship, { nullable: true })
  async findFirstAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorshipArgs
  ): Promise<Authorship | null> {
    return getPrismaFromContext(ctx).authorship.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorshipArgs
  ): Promise<Authorship[]> {
    return getPrismaFromContext(ctx).authorship.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async createAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorshipArgs
  ): Promise<Authorship> {
    return getPrismaFromContext(ctx).authorship.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).authorship.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: true })
  async deleteAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorshipArgs
  ): Promise<Authorship | null> {
    return getPrismaFromContext(ctx).authorship.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: true })
  async updateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorshipArgs
  ): Promise<Authorship | null> {
    return getPrismaFromContext(ctx).authorship.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).authorship.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).authorship.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async upsertAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorshipArgs
  ): Promise<Authorship> {
    return getPrismaFromContext(ctx).authorship.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateAuthorship, { nullable: false })
  async aggregateAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorshipArgs
  ): Promise<AggregateAuthorship> {
    return getPrismaFromContext(ctx).authorship.aggregate({
      ...args,
    });
  }
}
