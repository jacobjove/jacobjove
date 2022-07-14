import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { DocSnapshot } from "@/graphql/schema/helpers";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
  updateItem,
} from "../../../helpers";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUser } from "../../outputs/AggregateUser";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { AggregateUserArgs } from "./args/AggregateUserArgs";
import { CreateManyUserArgs } from "./args/CreateManyUserArgs";
import { CreateUserArgs } from "./args/CreateUserArgs";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";
import { DeleteUserArgs } from "./args/DeleteUserArgs";
import { FindFirstUserArgs } from "./args/FindFirstUserArgs";
import { FindManyUserArgs } from "./args/FindManyUserArgs";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";
import { GroupByUserArgs } from "./args/GroupByUserArgs";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";
import { UpdateUserArgs } from "./args/UpdateUserArgs";
import { UpsertUserArgs } from "./args/UpsertUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UserCrudResolver {
  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async user(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUserArgs
  ): Promise<User | null> {
    if (USE_FIREBASE) {
      let doc: DocSnapshot;
      if (args.where) {
        const [key, value] = Object.entries(args.where).filter(
          ([_key, value]) => typeof value !== "undefined"
        )[0];
        doc = (await firestore.collection(`users`).where(key, "==", value).get()).docs[0];
      } else {
        const userId = ctx.token?.uid as string;
        doc = await firestore.doc(`users/${userId}`).get();
      }
      return getFirestoreDocDataFromSnapshot(doc) as Promise<User | null>;
    } else {
      const { _count } = transformFields(graphqlFields(info));
      return getPrismaFromContext(ctx).user.findUnique({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    }
  }

  @TypeGraphQL.Query((_returns) => User, {
    nullable: true,
  })
  async findFirstUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserArgs
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.findFirst({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Query((_returns) => [User], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs
  ): Promise<User[]> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.findMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async createUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info));
    if (USE_FIREBASE) {
      console.error("Not implemented");
      throw new Error("Not implemented");
    } else {
      return getPrismaFromContext(ctx).user.create({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    }
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.createMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  async deleteUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteUserArgs
  ): Promise<User | null> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.delete({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  async updateUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateUserArgs
  ): Promise<User | null> {
    return updateItem("users", ctx, info, args) as Promise<User | null>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.deleteMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.updateMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
  })
  async upsertUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertUserArgs
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.upsert({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Query((_returns) => AggregateUser, {
    nullable: false,
  })
  async aggregateUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserArgs
  ): Promise<AggregateUser> {
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.aggregate({
        ...args,
        ...transformFields(graphqlFields(info)),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }

  @TypeGraphQL.Query((_returns) => [UserGroupBy], {
    nullable: false,
  })
  async groupByUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserArgs
  ): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));

    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).user.groupBy({
        ...args,
        ...Object.fromEntries(
          Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
        ),
      });
    } else {
      console.error("Not implemented");
      throw new Error("Not implemented");
    }
  }
}
