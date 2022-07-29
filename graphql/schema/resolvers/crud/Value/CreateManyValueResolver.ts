import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyValueArgs } from "./args/CreateManyValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class CreateManyValueResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyValueArgs
  ): Promise<AffectedRowsOutput> {
    return ValueCrudResolver.prototype.createManyValue(ctx, info, args);
  }
}
