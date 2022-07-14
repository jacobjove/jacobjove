import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyUserArgs } from "./args/UpdateManyUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class UpdateManyUserResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyUserArgs
  ): Promise<AffectedRowsOutput> {
    return UserCrudResolver.prototype.updateManyUser(ctx, info, args);
  }
}
