import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { DeleteUserArgs } from "./args/DeleteUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class DeleteUserResolver {
  @TypeGraphQL.Mutation((_returns) => User, { nullable: true })
  async deleteUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteUserArgs
  ): Promise<User | null> {
    return UserCrudResolver.prototype.deleteUser(ctx, info, args);
  }
}
