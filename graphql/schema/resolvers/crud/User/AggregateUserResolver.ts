import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { AggregateUser } from "../../outputs/AggregateUser";
import { AggregateUserArgs } from "./args/AggregateUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class AggregateUserResolver {
  @TypeGraphQL.Query((_returns) => AggregateUser, { nullable: false })
  async aggregateUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserArgs
  ): Promise<AggregateUser> {
    return UserCrudResolver.prototype.aggregateUser(ctx, info, args);
  }
}
