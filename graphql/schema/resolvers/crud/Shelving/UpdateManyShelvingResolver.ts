import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyShelvingArgs } from "./args/UpdateManyShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class UpdateManyShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    return ShelvingCrudResolver.prototype.updateManyShelving(ctx, info, args);
  }
}
