import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { Action } from "@/prisma/generated/models/Action";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Action)
export class ActionCompletionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async toggleAction(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actionId", (_type) => TypeGraphQL.Int) actionId: number,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Action> {
    const prisma = getPrismaFromContext(ctx);
    const actionCompletionExists =
      (await prisma.actCompletion.count({ where: { userId, actionId } })) > 0;
    if (actionCompletionExists) {
      return await prisma.actCompletion.update({
        where: {
          userId_actionId: { userId, actionId },
        },
        data: {
          archivedAt: archivedAt,
        },
      });
    } else {
      return await prisma.actCompletion.create({
        data: { userId: userId, actionId: actionId, archivedAt: archivedAt },
      });
    }
  }
}
