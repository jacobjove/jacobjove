import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarProvider } from "../../enums/CalendarProvider";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarMinAggregate", {
  isAbstract: true,
})
export class CalendarMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  uid!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  color!: string | null;

  @TypeGraphQL.Field(() => CalendarProvider, { nullable: true })
  provider!: "google" | "apple" | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accountId!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  primary!: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public!: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  enabled!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
