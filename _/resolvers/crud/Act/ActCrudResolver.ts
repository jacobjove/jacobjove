import { GqlContext } from "@/graphql/context";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
import { UpdateActArgs } from "./args/UpdateActArgs";
import { UpdateManyActArgs } from "./args/UpdateManyActArgs";
import { UpsertActArgs } from "./args/UpsertActArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class ActCrudResolver {
  @TypeGraphQL.Query((_returns) => Act, { nullable: true })
  async act(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActArgs
  ): Promise<Act | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Act, { nullable: true })
  async findFirstAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActArgs
  ): Promise<Act | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Act], { nullable: false })
  async acts(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActArgs
  ): Promise<Act[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: false })
  async createAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActArgs
  ): Promise<Act> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: true })
  async deleteAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActArgs
  ): Promise<Act | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: true })
  async updateAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActArgs
  ): Promise<Act | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Act, { nullable: false })
  async upsertAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActArgs
  ): Promise<Act> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateAct, { nullable: false })
  async aggregateAct(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActArgs
  ): Promise<AggregateAct> {
    throw new Error("Not implemented");
  }
}
