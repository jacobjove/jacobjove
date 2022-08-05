import { GqlContext } from "@/graphql/context";
import { Identity, IdentityActRelation } from "@/graphql/schema/generated/models";
import { Act } from "@/graphql/schema/generated/models/act.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => IdentityActRelation)
export class IdentityActRelationRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Identity, { nullable: false })
  async identity(
    @TypeGraphQL.Root() identityActRelation: IdentityActRelation,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Identity> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Act, { nullable: false })
  async action(
    @TypeGraphQL.Root() identityActRelation: IdentityActRelation,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Act> {
    throw new Error("Not implemented");
  }
}
