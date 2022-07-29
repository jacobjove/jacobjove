import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { Identity } from "../../../models/Identity";
import { IdentityActRelation } from "../../../models/IdentityActRelation";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class IdentityActRelationRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Identity, { nullable: false })
  async identity(
    @TypeGraphQL.Root() identityActRelation: IdentityActRelation,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Identity> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .identityActRelation.findUnique({
        where: {
          id: identityActRelation.id,
        },
      })
      .identity({});
  }

  @TypeGraphQL.FieldResolver((_type) => Act, { nullable: false })
  async action(
    @TypeGraphQL.Root() identityActRelation: IdentityActRelation,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Act> {
    throw new Error("Not implemented");
  }
}
