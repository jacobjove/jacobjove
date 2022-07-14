import { ApolloContext } from "@/graphql/context";
import { toggleSelection } from "@/graphql/schema/helpers";
import { Action } from "@/graphql/schema/models/Action";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionCompletionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async toggleAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("actionId", (_type) => String) actionId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Action> {
    return toggleSelection("actions", ctx, info, actionId, archivedAt) as Promise<Action>;
  }
}
