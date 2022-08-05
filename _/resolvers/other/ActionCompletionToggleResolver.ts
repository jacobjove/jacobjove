import { GqlContext } from "@/graphql/context";
import { Action } from "@/graphql/schema/generated/models/action.model";
import { toggleSelection } from "@/graphql/schema/helpers";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionCompletionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async toggleAction(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("actionId", () => String) actionId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Action> {
    return toggleSelection("actions", ctx, info, actionId, archivedAt) as Promise<Action>;
  }
}
