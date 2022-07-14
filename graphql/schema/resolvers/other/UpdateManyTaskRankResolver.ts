import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { getPrismaFromContext } from "@/graphql/schema/helpers";
import { Task } from "@/graphql/schema/models/Task";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType()
class UpdateManyTaskRankData implements Partial<Task> {
  @TypeGraphQL.Field((_type) => String)
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int)
  rank!: number;
}

@TypeGraphQL.Resolver((_of) => Task)
export class UpdateManyTaskRankResolver {
  @TypeGraphQL.Mutation((_returns) => [Task], {
    nullable: false,
  })
  async updateManyTaskRank(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("data", (_type) => [UpdateManyTaskRankData]) data: Pick<Task, "id" | "rank">[]
    // @TypeGraphQL.Arg("taskId", (_type) => String) taskId: string,
    // @TypeGraphQL.Arg("rank", (_type) => TypeGraphQL.Int) rank: number,
  ): Promise<Task[]> {
    const userId = ctx.token?.uid;
    if (USE_FIREBASE) {
      const tasks = await firestore.runTransaction(async (transaction) => {
        return data.map(async ({ id, rank }) => {
          const docRef = firestore.collection(`users/${userId}/tasks`).doc(id);
          const task = (await transaction.get(docRef).then((doc) => doc.data())) as Task;
          const updatedData = { rank };
          transaction.update(docRef, updatedData);
          return {
            ...task,
            ...updatedData,
          } as Task;
        });
      });
      return Promise.all(tasks);
    } else {
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
}
