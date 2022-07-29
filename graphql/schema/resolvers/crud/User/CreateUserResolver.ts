import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { CreateUserArgs } from "./args/CreateUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class CreateUserResolver {
  @TypeGraphQL.Mutation((_returns) => User, { nullable: false })
  async createUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs
  ): Promise<User> {
    return UserCrudResolver.prototype.createUser(ctx, info, args);
  }
}
