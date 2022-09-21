import * as generatedResolvers from "@web/generated/graphql/resolvers";
import User from "@web/generated/graphql/types/User";
import { findUser } from "@web/generated/shortcuts/user.shortcuts";
import type { GqlContext } from "@web/graphql/context";
import type { GraphQLResolveInfo } from "graphql";
import { Ctx, Info, Query, Resolver } from "type-graphql-v2-fork";

@Resolver(() => User)
export class UserResolver extends generatedResolvers.UserResolver {
  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() ctx: GqlContext, @Info() _info: GraphQLResolveInfo) {
    if (!ctx.session?.user) {
      console.error("No user in session", ctx.session);
      return null;
    }
    return await findUser({
      where: {
        email: ctx.session?.user.email,
      },
    });
  }
}

module.exports = { ...generatedResolvers, UserResolver };
