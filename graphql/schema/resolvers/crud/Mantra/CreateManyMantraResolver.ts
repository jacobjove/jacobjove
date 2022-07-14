import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyMantraArgs } from "./args/CreateManyMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class CreateManyMantraResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    return MantraCrudResolver.prototype.createManyMantra(ctx, info, args);
  }
}
