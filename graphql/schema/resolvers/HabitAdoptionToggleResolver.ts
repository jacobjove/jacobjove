import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { Action } from "@/prisma/generated/models/Action";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Action)
export class HabitAdoptionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Action, {
    nullable: false,
  })
  async toggleHabitAdoption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actId", (_type) => TypeGraphQL.Int) actId: number,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Action> {
    const prisma = getPrismaFromContext(ctx);
    const actionExists = (await prisma.action.count({ where: { userId, actId } })) > 0;
    if (actionExists) {
      return await prisma.action.update({
        where: {
          userId_actionId: { userId, actId },
        },
        data: {
          archivedAt: archivedAt,
        },
      });
    } else {
      return await prisma.action.create({
        data: { userId, actId, archivedAt },
      });
    }
  }
}
