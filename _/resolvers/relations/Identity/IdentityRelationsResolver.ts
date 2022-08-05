import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "@/graphql/schema/generated/models";
import { IdentityActRelation } from "@/graphql/schema/generated/models";
import { IdentityActionRelationsArgs } from "./args/IdentityActionRelationsArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [IdentityActRelation], { nullable: false })
  async actionRelations(
    @TypeGraphQL.Root() identity: Identity,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: IdentityActionRelationsArgs
  ): Promise<IdentityActRelation[]> {
    throw new Error("Not implemented");
  }
}
