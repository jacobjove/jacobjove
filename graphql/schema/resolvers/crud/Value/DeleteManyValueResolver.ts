import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Value } from "../../../models/Value";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyValueArgs } from "./args/DeleteManyValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class DeleteManyValueResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyValueArgs
  ): Promise<AffectedRowsOutput> {
    return ValueCrudResolver.prototype.deleteManyValue(ctx, info, args);
  }
}
