import { GqlContext } from "@/graphql/context";
import { Shelving } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateShelving } from "../../outputs/AggregateShelving";
import { AggregateShelvingArgs } from "./args/AggregateShelvingArgs";
import { CreateManyShelvingArgs } from "./args/CreateManyShelvingArgs";
import { CreateShelvingArgs } from "./args/CreateShelvingArgs";
import { DeleteManyShelvingArgs } from "./args/DeleteManyShelvingArgs";
import { DeleteShelvingArgs } from "./args/DeleteShelvingArgs";
import { FindFirstShelvingArgs } from "./args/FindFirstShelvingArgs";
import { FindManyShelvingArgs } from "./args/FindManyShelvingArgs";
import { FindUniqueShelvingArgs } from "./args/FindUniqueShelvingArgs";
import { UpdateManyShelvingArgs } from "./args/UpdateManyShelvingArgs";
import { UpdateShelvingArgs } from "./args/UpdateShelvingArgs";
import { UpsertShelvingArgs } from "./args/UpsertShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class ShelvingCrudResolver {
  @TypeGraphQL.Query((_returns) => Shelving, { nullable: true })
  async shelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueShelvingArgs
  ): Promise<Shelving | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Shelving, { nullable: true })
  async findFirstShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstShelvingArgs
  ): Promise<Shelving | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyShelvingArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: false })
  async createShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateShelvingArgs
  ): Promise<Shelving> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: true })
  async deleteShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteShelvingArgs
  ): Promise<Shelving | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: true })
  async updateShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateShelvingArgs
  ): Promise<Shelving | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: false })
  async upsertShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertShelvingArgs
  ): Promise<Shelving> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateShelving, { nullable: false })
  async aggregateShelving(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateShelvingArgs
  ): Promise<AggregateShelving> {
    throw new Error("Not implemented");
  }
}
