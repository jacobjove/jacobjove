import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Mantra } from "../../../models/Mantra";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyMantraArgs } from "./args/UpdateManyMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class UpdateManyMantraResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    return MantraCrudResolver.prototype.updateManyMantra(ctx, info, args);
  }
}
