import { getPrismaFromContext } from "@/prisma/generated/helpers";
import { Task } from "@/prisma/generated/models/Task";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType()
class UpdateManyTaskRankData implements Partial<Task> {
  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  id!: number;

  @TypeGraphQL.Field((type) => TypeGraphQL.Int)
  rank!: number;
}

@TypeGraphQL.Resolver((_of) => Task)
export class UpdateManyTaskRankResolver {
  @TypeGraphQL.Mutation((_returns) => [Task], {
    nullable: false,
  })
  async updateManyTaskRank(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("userId", (_type) => TypeGraphQL.Int) userId: number,
    @TypeGraphQL.Arg("data", (_type) => [UpdateManyTaskRankData]) data: Pick<Task, "id" | "rank">[]
    // @TypeGraphQL.Arg("taskId", (_type) => TypeGraphQL.Int) taskId: number,
    // @TypeGraphQL.Arg("rank", (_type) => TypeGraphQL.Int) rank: number,
  ): Promise<Task[]> {
    const prisma = getPrismaFromContext(ctx);
    return await prisma.$transaction(
      data.map(({ id, rank }) =>
        prisma.task.update({
          where: {
            id,
          },
          data: {
            rank,
          },
        })
      )
    );
  }
}
