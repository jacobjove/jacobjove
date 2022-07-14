import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyActionArgs } from "./args/CreateManyActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class CreateManyActionResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    return ActionCrudResolver.prototype.createManyAction(ctx, info, args);
  }
}
