import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Identity } from "../../../models/Identity";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() identity: Identity,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .identity.findUnique({
        where: {
          id: identity.id,
        },
      })
      .user({});
  }
}
