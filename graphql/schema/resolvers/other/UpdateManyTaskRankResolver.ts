import { ApolloContext } from "@/graphql/context";
import { Task } from "@/graphql/schema/models/Task";
import { UpdateManyTaskRankInput } from "@/graphql/schema/resolvers/inputs/UpdateManyTaskRankInput";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Task)
export class UpdateManyTaskRankResolver {
  @TypeGraphQL.Mutation((_returns) => [Task], { nullable: false })
  async updateManyTaskRank(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("data", (_type) => [UpdateManyTaskRankInput]) data: Pick<Task, "id" | "rank">[]
    // @TypeGraphQL.Arg("taskId", (_type) => String) taskId: string,
    // @TypeGraphQL.Arg("rank", (_type) => TypeGraphQL.Int) rank: number,
  ): Promise<Task[]> {
    const userId = ctx.session?.user.id;
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
  }
}
