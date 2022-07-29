import { ApolloContext } from "@/graphql/context";
import { getPrismaFromContext } from "@/graphql/schema/helpers";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Mantra } from "../../../models/Mantra";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => Mantra)
export class MantraRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() mantra: Mantra,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .mantra.findUnique({
        where: {
          id: mantra.id,
        },
      })
      .user({});
  }
}
