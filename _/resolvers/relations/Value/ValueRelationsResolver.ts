import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { User } from "@/graphql/schema/generated/models/user.model";
import { Value } from "@/graphql/schema/generated/models/value.model";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(@TypeGraphQL.Root() value: Value, @TypeGraphQL.Ctx() ctx: GqlContext): Promise<User> {
    throw new Error("Not implemented");
  }
}
