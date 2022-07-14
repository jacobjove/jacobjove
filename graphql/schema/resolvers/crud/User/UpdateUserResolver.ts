import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UpdateUserArgs } from "./args/UpdateUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UpdateUserResolver {
  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: true,
  })
  async updateUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateUserArgs
  ): Promise<User | null> {
    return UserCrudResolver.prototype.updateUser(ctx, info, args);
  }
}
