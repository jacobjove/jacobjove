import { GqlContext } from "@/graphql/context";
import { Authorship } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorshipArgs
  ): Promise<Authorship | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Authorship, { nullable: true })
  async findFirstAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorshipArgs
  ): Promise<Authorship | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorshipArgs
  ): Promise<Authorship[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async createAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorshipArgs
  ): Promise<Authorship> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: true })
  async deleteAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorshipArgs
  ): Promise<Authorship | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: true })
  async updateAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorshipArgs
  ): Promise<Authorship | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorshipArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async upsertAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorshipArgs
  ): Promise<Authorship> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateAuthorship, { nullable: false })
  async aggregateAuthorship(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorshipArgs
  ): Promise<AggregateAuthorship> {
    throw new Error("Not implemented");
  }
}
