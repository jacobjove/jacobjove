import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { ActionCompletion } from "@/prisma/generated/models/ActionCompletion";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => ActionCompletion)
export class ActionCompletionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => ActionCompletion, {
    nullable: false,
  })
  async toggleActionCompletion(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actionId", (_type) => TypeGraphQL.Int) actionId: number,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<ActionCompletion> {
    const prisma = getPrismaFromContext(ctx);
    const actionCompletionExists =
      (await prisma.actionCompletion.count({ where: { userId, actionId } })) > 0;
    if (actionCompletionExists) {
      return await prisma.actionCompletion.update({
        where: {
          userId_actionId: { userId, actionId },
        },
        data: {
          archivedAt: archivedAt,
        },
      });
    } else {
      return await prisma.actionCompletion.create({
        data: { userId: userId, actionId: actionId, archivedAt: archivedAt },
      });
    }
  }
}
