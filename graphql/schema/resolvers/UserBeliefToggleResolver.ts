import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { UserBelief } from "@/prisma/generated/models/UserBelief";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => UserBelief)
export class UserBeliefToggleResolver {
  @TypeGraphQL.Mutation((_returns) => UserBelief, {
    nullable: false,
  })
  async toggleUserBelief(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("beliefId", (_type) => TypeGraphQL.Int) beliefId: number,
    @TypeGraphQL.Arg("deleted", { nullable: true }) deleted: null | Date
  ): Promise<UserBelief> {
    const prisma = getPrismaFromContext(ctx);
    const userBeliefExists =
      (await prisma.userBelief.count({
        where: {
          userId: userId,
          beliefId: beliefId,
        },
      })) > 0;
    if (userBeliefExists) {
      return await prisma.userBelief.update({
        where: {
          userId_beliefId: {
            userId: userId,
            beliefId: beliefId,
          },
        },
        data: {
          deleted: deleted,
        },
      });
    } else {
      return await prisma.userBelief.create({
        data: {
          userId: userId,
          beliefId: beliefId,
          deleted: deleted,
        },
      });
    }
  }
}
