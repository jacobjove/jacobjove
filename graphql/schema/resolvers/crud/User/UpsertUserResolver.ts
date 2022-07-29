import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { UpsertUserArgs } from "./args/UpsertUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UpsertUserResolver {
  @TypeGraphQL.Mutation((_returns) => User, { nullable: false })
  async upsertUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertUserArgs
  ): Promise<User> {
    return UserCrudResolver.prototype.upsertUser(ctx, info, args);
  }
}
