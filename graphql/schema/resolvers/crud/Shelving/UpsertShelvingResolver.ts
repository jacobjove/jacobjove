import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { UpsertShelvingArgs } from "./args/UpsertShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class UpsertShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: false })
  async upsertShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertShelvingArgs
  ): Promise<Shelving> {
    return ShelvingCrudResolver.prototype.upsertShelving(ctx, info, args);
  }
}
