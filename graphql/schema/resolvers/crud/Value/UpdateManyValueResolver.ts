import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyValueArgs } from "./args/UpdateManyValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class UpdateManyValueResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    return ValueCrudResolver.prototype.updateManyValue(ctx, info, args);
  }
}
