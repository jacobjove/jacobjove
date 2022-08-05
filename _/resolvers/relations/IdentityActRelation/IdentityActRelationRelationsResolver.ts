import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { Identity } from "@/graphql/schema/generated/models";
import { IdentityActRelation } from "@/graphql/schema/generated/models";

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
