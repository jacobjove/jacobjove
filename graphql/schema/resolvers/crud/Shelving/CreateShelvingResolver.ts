import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { CreateShelvingArgs } from "./args/CreateShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class CreateShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: false })
  async createShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateShelvingArgs
  ): Promise<Shelving> {
    return ShelvingCrudResolver.prototype.createShelving(ctx, info, args);
  }
}
