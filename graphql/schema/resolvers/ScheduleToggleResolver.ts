import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { Schedule } from "@/prisma/generated/models/Schedule";
import { getPrismaFromContext } from "@/prisma/generated/helpers";
import * as GraphQLScalars from "graphql-scalars";

@TypeGraphQL.Resolver((_of) => Schedule)
export class ScheduleToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Schedule, {
    nullable: false,
  })
  async toggleScheduleAdoption(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId") userId: string,
    @TypeGraphQL.Arg("actionId", (_type) => TypeGraphQL.Int) actionId: number,
    @TypeGraphQL.Arg("abandonedAt", { nullable: true }) abandonedAt: null | Date
  ): Promise<Schedule> {
    const prisma = getPrismaFromContext(ctx);
    const scheduleExists = (await prisma.schedule.count({ where: { userId, actionId } })) > 0;
    if (scheduleExists) {
      return await prisma.schedule.update({
        where: {
          userId_actionId: { userId, actionId },
        },
        data: {
          abandonedAt: abandonedAt,
        },
      });
    } else {
      return await prisma.schedule.create({
        data: { userId: userId, actionId: actionId, abandonedAt: abandonedAt },
      });
    }
  }
}
