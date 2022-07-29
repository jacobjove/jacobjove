import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { FindManyShelvingArgs } from "./args/FindManyShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class FindManyShelvingResolver {
  @TypeGraphQL.Query((_returns) => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyShelvingArgs
  ): Promise<Shelving[]> {
    return ShelvingCrudResolver.prototype.shelvings(ctx, info, args);
  }
}
