import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import {
  createItem,
  getFirestoreDocDataFromSnapshot,
  getItem,
  getPrismaFromContext,
  updateItem,
} from "../../../helpers";
import { Task } from "../../../models/Task";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTask } from "../../outputs/AggregateTask";
import { AggregateTaskArgs } from "./args/AggregateTaskArgs";
import { CreateManyTaskArgs } from "./args/CreateManyTaskArgs";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { DeleteTaskArgs } from "./args/DeleteTaskArgs";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { UpsertTaskArgs } from "./args/UpsertTaskArgs";

@TypeGraphQL.Resolver((_of) => Task)
export class TaskCrudResolver {
  @TypeGraphQL.Query((_returns) => Task, { nullable: true })
  async task(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueTaskArgs
  ): Promise<Task | null> {
    return getItem("tasks", ctx, info, args);
  }

  @TypeGraphQL.Query((_returns) => Task, { nullable: true })
  async findFirstTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstTaskArgs
  ): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Task], { nullable: false })
  async tasks(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyTaskArgs
  ): Promise<Task[]> {
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).task.findMany({ ...args });
    } else {
      const tasksRef = firestore.collection(`users/${ctx.session?.user.id}/tasks`);
      const snapshot = await tasksRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<Task>)
      );
    }
  }

  @TypeGraphQL.Mutation((_returns) => Task, { nullable: false })
  async createTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateTaskArgs
  ): Promise<Task> {
    return createItem({
      collectionName: "tasks",
      ctx,
      info,
      args,
    }) as Promise<Task>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Task, { nullable: true })
  async deleteTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteTaskArgs
  ): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Task, { nullable: true })
  async updateTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateTaskArgs
  ): Promise<Task | null> {
    return updateItem("tasks", ctx, info, args, true) as Promise<Task>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Task, { nullable: false })
  async upsertTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertTaskArgs
  ): Promise<Task> {
    return getPrismaFromContext(ctx).task.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateTask, { nullable: false })
  async aggregateTask(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTaskArgs
  ): Promise<AggregateTask> {
    return getPrismaFromContext(ctx).task.aggregate({
      ...args,
    });
  }
}
