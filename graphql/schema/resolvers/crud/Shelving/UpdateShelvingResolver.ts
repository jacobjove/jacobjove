import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Shelving } from "../../../models/Shelving";
import { UpdateShelvingArgs } from "./args/UpdateShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class UpdateShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => Shelving, {
    nullable: true,
  })
  async updateShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateShelvingArgs
  ): Promise<Shelving | null> {
    return ShelvingCrudResolver.prototype.updateShelving(ctx, info, args);
  }
}
