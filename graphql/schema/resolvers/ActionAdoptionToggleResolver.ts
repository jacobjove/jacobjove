import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { UserAction } from "@/prisma/generated/models/UserAction";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => UserAction)
export class ActionAdoptionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => UserAction, {
    nullable: false,
  })
  async toggleActionAdoption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actionId", (_type) => TypeGraphQL.Int) actionId: number,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<UserAction> {
    const prisma = getPrismaFromContext(ctx);
    const userActionExists = (await prisma.userAction.count({ where: { userId, actionId } })) > 0;
    if (userActionExists) {
      return await prisma.userAction.update({
        where: {
          userId_actionId: { userId, actionId },
        },
        data: {
          archivedAt: archivedAt,
        },
      });
    } else {
      return await prisma.userAction.create({
        data: { userId: userId, actionId: actionId, archivedAt: archivedAt },
      });
    }
  }
}
