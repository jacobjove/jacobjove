import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { FindFirstShelvingArgs } from "./args/FindFirstShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class FindFirstShelvingResolver {
  @TypeGraphQL.Query((_returns) => Shelving, { nullable: true })
  async findFirstShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstShelvingArgs
  ): Promise<Shelving | null> {
    return ShelvingCrudResolver.prototype.findFirstShelving(ctx, info, args);
  }
}
