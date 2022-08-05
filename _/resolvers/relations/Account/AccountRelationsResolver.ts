import { GqlContext } from "@/graphql/context";
import { Account } from "@/graphql/schema/generated/models/account.model";
import { Calendar } from "@/graphql/schema/generated/models/calendar.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCalendarsArgs } from "./args/AccountCalendarsArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class AccountRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() account: Account,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Root() account: Account,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: AccountCalendarsArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }
}
