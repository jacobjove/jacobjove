import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { FindUniqueShelvingArgs } from "./args/FindUniqueShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class FindUniqueShelvingResolver {
  @TypeGraphQL.Query((_returns) => Shelving, { nullable: true })
  async shelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueShelvingArgs
  ): Promise<Shelving | null> {
    return ShelvingCrudResolver.prototype.shelving(ctx, info, args);
  }
}
