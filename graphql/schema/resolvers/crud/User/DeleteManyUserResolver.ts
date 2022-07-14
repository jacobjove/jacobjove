import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyUserArgs } from "./args/DeleteManyUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class DeleteManyUserResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyUserArgs
  ): Promise<AffectedRowsOutput> {
    return UserCrudResolver.prototype.deleteManyUser(ctx, info, args);
  }
}
