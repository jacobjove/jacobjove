import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { UserAction } from "@/prisma/generated/models/UserAction";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => UserAction)
export class UserActionToggleResolver {
  @TypeGraphQL.Mutation((_returns) => UserAction, {
    nullable: false,
  })
  async toggleUserActionAdoption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actionId", (_type) => TypeGraphQL.Int) actionId: number,
    @TypeGraphQL.Arg("abandonedAt", { nullable: true }) abandonedAt: null | Date
  ): Promise<UserAction> {
    const prisma = getPrismaFromContext(ctx);
    const userActionExists = (await prisma.userAction.count({ where: { userId, actionId } })) > 0;
    if (userActionExists) {
      return await prisma.userAction.update({
        where: {
          userId_actionId: { userId, actionId },
        },
        data: {
          abandonedAt: abandonedAt,
        },
      });
    } else {
      return await prisma.userAction.create({
        data: { userId: userId, actionId: actionId, abandonedAt: abandonedAt },
      });
    }
  }
}
