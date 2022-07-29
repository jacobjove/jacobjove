// import { getPrismaFromContext } from "../../../helpers";
import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { IdentityActionRelationsArgs } from "./args/IdentityActionRelationsArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [IdentityActRelation], { nullable: false })
  async actionRelations(
    @TypeGraphQL.Root() identity: Identity,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: IdentityActionRelationsArgs
  ): Promise<IdentityActRelation[]> {
    throw new Error("Not implemented");
  }
}
