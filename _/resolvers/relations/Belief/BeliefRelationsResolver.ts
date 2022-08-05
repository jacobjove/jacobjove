import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "@/graphql/schema/generated/models/belief.model";
import { User } from "@/graphql/schema/generated/models/user.model";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() belief: Belief,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }
}
