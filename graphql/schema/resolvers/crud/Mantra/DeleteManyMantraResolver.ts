import { ApolloContext } from "@/graphql/context";
import { MantraCrudResolver } from "@/graphql/schema/resolvers/crud/Mantra/MantraCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Mantra } from "../../../models/Mantra";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyMantraArgs } from "./args/DeleteManyMantraArgs";

@TypeGraphQL.Resolver((_of) => Mantra)
export class DeleteManyMantraResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyMantra(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyMantraArgs
  ): Promise<AffectedRowsOutput> {
    return MantraCrudResolver.prototype.deleteManyMantra(ctx, info, args);
  }
}
