import { GqlContext } from "@/graphql/context";
import { Mantra } from "@/graphql/schema/generated/models/mantra.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMantra } from "../../outputs/AggregateMantra";
import { AggregateMantraArgs } from "./args/AggregateMantraArgs";
import { CreateMantraArgs } from "./args/CreateMantraArgs";
import { CreateManyMantraArgs } from "./args/CreateManyMantraArgs";
import { DeleteMantraArgs } from "./args/DeleteMantraArgs";
import { DeleteManyMantraArgs } from "./args/DeleteManyMantraArgs";
import { FindFirstMantraArgs } from "./args/FindFirstMantraArgs";
import { FindManyMantraArgs } from "./args/FindManyMantraArgs";
import { FindUniqueMantraArgs } from "./args/FindUniqueMantraArgs";
import { UpdateMantraArgs } from "./args/UpdateMantraArgs";
import { UpdateManyMantraArgs } from "./args/UpdateManyMantraArgs";
import { UpsertMantraArgs } from "./args/UpsertMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class MantraCrudResolver {
  @TypeGraphQL.Query((_returns) => Mantra, { nullable: true })
  async mantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueMantraArgs
  ): Promise<Mantra | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Mantra, { nullable: true })
  async findFirstMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstMantraArgs
  ): Promise<Mantra | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Mantra], { nullable: false })
  async mantras(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyMantraArgs
  ): Promise<Mantra[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: false })
  async createMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateMantraArgs
  ): Promise<Mantra> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: true })
  async deleteMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteMantraArgs
  ): Promise<Mantra | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: true })
  async updateMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateMantraArgs
  ): Promise<Mantra | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: false })
  async upsertMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertMantraArgs
  ): Promise<Mantra> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateMantra, { nullable: false })
  async aggregateMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateMantraArgs
  ): Promise<AggregateMantra> {
    throw new Error("Not implemented");
  }
}
