import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Belief } from "../../../models/Belief";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() belief: Belief,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .belief.findUnique({
        where: {
          id: belief.id,
        },
      })
      .user({});
  }
}
