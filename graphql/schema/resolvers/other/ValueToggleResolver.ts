import { ApolloContext } from "@/graphql/context";
import { toggleSelection } from "@/graphql/schema/helpers";
import { Value } from "@/graphql/schema/models/Value";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: false,
  })
  async toggleValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("valueId", (_type) => String) valueId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Value> {
    return toggleSelection("values", ctx, info, valueId, archivedAt) as Promise<Value>;
  }
}
