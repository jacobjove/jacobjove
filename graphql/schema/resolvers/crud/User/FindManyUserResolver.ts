import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { FindManyUserArgs } from "./args/FindManyUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class FindManyUserResolver {
  @TypeGraphQL.Query((_returns) => [User], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs
  ): Promise<User[]> {
    return UserCrudResolver.prototype.users(ctx, info, args);
  }
}
