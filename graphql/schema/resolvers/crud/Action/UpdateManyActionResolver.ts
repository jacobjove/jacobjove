import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Action } from "../../../models/Action";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyActionArgs } from "./args/UpdateManyActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class UpdateManyActionResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionArgs
  ): Promise<AffectedRowsOutput> {
    return ActionCrudResolver.prototype.updateManyAction(ctx, info, args);
  }
}
