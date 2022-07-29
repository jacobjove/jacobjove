import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "../../../models/User";
import { Value } from "../../../models/Value";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() value: Value,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    throw new Error("Not implemented");
    // return getPrismaFromContext(ctx)
    //   .value.findUnique({
    //     where: {
    //       id: value.id,
    //     },
    //   })
    //   .user({});
  }
}
