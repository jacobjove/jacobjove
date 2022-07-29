import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { FindUniqueUserArgs } from "./args/FindUniqueUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class FindUniqueUserResolver {
  @TypeGraphQL.Query((_returns) => User, { nullable: true })
  async user(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUserArgs
  ): Promise<User | null> {
    return UserCrudResolver.prototype.user(ctx, info, args);
  }
}
